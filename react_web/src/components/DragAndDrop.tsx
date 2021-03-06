import React, { Component } from 'react'
class DragAndDrop extends Component<DragAndDropProps> {
  state = {
    drag: false,
    dragging: false,
  }
  dropRef = React.createRef<HTMLDivElement>()
  dragCounter = 0;

  handleDrag = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragIn = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e?.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      this.setState({drag: true})
    }
  }
  handleDragOut = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({drag: false})
    }
  }

  handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({drag: false})
    if (e?.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0    
    }
  }

  componentDidMount() {
    let div:HTMLDivElement | null  = this.dropRef.current
    div?.addEventListener('dragenter', this.handleDragIn)
    div?.addEventListener('dragleave', this.handleDragOut)
    div?.addEventListener('dragover', this.handleDrag)
    div?.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    let div:HTMLDivElement | null = this.dropRef.current
    div?.removeEventListener('dragenter', this.handleDragIn)
    div?.removeEventListener('dragleave', this.handleDragOut)
    div?.removeEventListener('dragover', this.handleDrag)
    div?.removeEventListener('drop', this.handleDrop)
  }

  render() {
    return (
      <div
        className="border-2 border-primary-light border-dashed w-full rounded-md flex flex-col justify-center items-center p-2 overflow-x-auto relative my-8"
        ref={this.dropRef}
      >
        {this.state.drag &&
          <div 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
            className="bg-primary-light bg-opacity-10"
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                bottom: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div className="font-bold text-white">drop here :)</div>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}
export default DragAndDrop

interface DragAndDropProps {
    handleDrop: any,
    children?: React.ReactNode
}