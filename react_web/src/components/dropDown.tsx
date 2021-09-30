import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Props } from 'react'
import { InputField } from './inputs'

export default class DropDown extends Component<DropDownProps> {

    state = {
        isOpen: false,
    }

    constructor(props: DropDownProps) {
        super(props)

        this.showMenu = this.showMenu.bind(this);
        // this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        // this.setState({isOpen: true})
        // document.addEventListener('click', this.closeMenu);
        this.setState({ isOpen: !this.state.isOpen }, () => {
            // document.addEventListener('click', this.closeMenu);
        });
    }
      
    // closeMenu(event: Event) {
    //     event.preventDefault()
    //     this.setState({ isOpen: false }, () => {
    //         document.removeEventListener('click', this.closeMenu);
    //     });  
    // }

    render() {
        return (
            <div className="flex relative flex-col">
                <button className="p-4 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-40 text-primary-light w-full my-4 bg-primary-light bg-opacity-5 rounded-md" onClick={this.showMenu}>
                    <div className="flex flex-row justify-between">
                        <p>{ this.props.value ?? this.props.placeholder }</p>
                        <span>{ this.state.isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                    </div>
                </button>

                {this.state.isOpen ?
                    <div className="absolute flex-col flex bg-bg-light p-4 right-0 w-full rounded-md mb-20 bottom-0 shadow-xl drop-shadow-xl items-start max-h-80 overflow-x-auto">
                        <InputField placeholder="Search project..."></InputField>
                        { this.props.children }
                    </div> : null
                }
            </div>
        )
    }
}

interface DropDownProps {
    children: React.ReactNode,
    value: String | null,
    isOpen: Boolean | null,
    placeholder: String,
}