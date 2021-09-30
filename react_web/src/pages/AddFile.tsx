import { useState } from "react";
import { useHistory } from "react-router";
import { v4 } from "uuid";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { InputField, InputArea } from "../components/inputs"
import { addFile, addProject } from "../services/db_utils";
import successImgURL from '../assets/Success.png'
import DragAndDrop from "../components/DragAndDrop";
import { useFilePicker } from "use-file-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileUpload, faTimesCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import { getDownloadURL, ref, TaskEvent, uploadBytesResumable, UploadTask, UploadTaskSnapshot } from "@firebase/storage";
import { storage } from "../firebase_client";

function AddFile() {
    const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({ readAs: 'ArrayBuffer', maxFileSize: 100, multiple:false , limitFilesConfig:{ max: 1 }});
    const [files, setFiles] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isupLoading, setIsUpLoading] = useState<boolean>(false)
    const [isDone, setDone] = useState<boolean>(false)
    const [description, setDescription] = useState<string | null>(null)
    const [title, setTitle] = useState<string | null>(null)
    const [mediaURL, setMediaURL] = useState<string | null>(null)
    const [id, setID] = useState<string | null>(null)
    const [progress, setProgress] = useState<number>(0)
    const [ext, setExt] = useState<string | null>(null)
    const history = useHistory()

    async function addFileToStore() {
        if(title != null && id != null && description != null && ext != null) {
            // let id:String = v4().replaceAll('-', '').substr(10)
            try{
                await addFile(id, null, mediaURL, description, title, ext)
                setDone(true)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    const handleDrop = (files: Array<any>) => {
        let fileList = []
        // console.log(files)
        for (var i = 0; i < 1; i++) {
          if (!files[i].name) return
          fileList.push(files[i])
        }
        setFiles(fileList)
    }

    const uploadFile = async () => {
        if(filesContent.length > 0 || files.length > 0) {
            setIsUpLoading(true)
            var id = v4().replaceAll('-', '').substr(16)
            var file = files.length > 0 ? files[0] : filesContent[0]
            let ext:string = file.name.split('.')[1]
            setExt(ext)
            setID(id)
            var task:UploadTask = uploadBytesResumable(ref(storage, '/userfiles/' + id + '.' + ext), file.content)
            const unsubscribe = task.on('state_changed', (snap: UploadTaskSnapshot) => {
                setProgress((snap.bytesTransferred/snap.totalBytes)*100)
            }, (err)=>{}, async () => {
                unsubscribe()
                var url = await getDownloadURL(ref(storage, '/userfiles/' + id + '.' + ext))
                setMediaURL(url)
                setIsUpLoading(false)
            })
        }
    }

    return (
        <div className="flex flex-col w-full justify-start items-center h-full overflow-x-auto">
            <div className="felx flex-col max-w-screen-md w-full justify-center items-center bg-primary-light bg-opacity-5 p-8 rounded-md mt-8">
                {isDone ?
                    <div className="flex justify-center items-center flex-col">
                        <img src={successImgURL} alt="success" className="w-64 h-64"/>
                        <h1 className="font-bold text-2xl animate-bounce">File Added Successfully!</h1>
                        <a href={mediaURL ?? ''}>{mediaURL}</a>
                        <PrimaryButton onClick={() => { history.push('/files') }}>Go to Home</PrimaryButton>
                    </div> :
                    <>
                        <h1 className="text-lg p-1 font-bold">Add a new file</h1>
                        <DragAndDrop handleDrop={handleDrop}>
                            {files.length > 0 ?
                                <div style={{height: 150}} className="flex flex-col justify-center items-center p-2 w-full h-full overflow-x-auto">
                                    {files?.map((file:any, i) =>
                                        <div key={i}>
                                            <p>{file.name}</p>
                                            <p>{file.size}</p>
                                        </div>
                                    )}
                                    <button className="flex justify-center items-center flex-col my-2 bg-primary-light text-black px-4 py-2 rounded-md" onClick={ uploadFile }>
                                        <h1 className="font-bold text-lg"><FontAwesomeIcon icon={faUpload} className="mr-2" size="1x"></FontAwesomeIcon> Upload file</h1>
                                    </button>
                                    {isupLoading ? <h1>{progress}%</h1>: null}
                                </div> : filesContent.length > 0 ?
                                    <div style={{height: 150}} className="flex-col flex justify-center items-center overflow-x-auto">
                                        {filesContent?.map((file, i) =>
                                            <div key={i}>
                                                <p>{file.name}</p>
                                                <p>{file.lastModified}</p>
                                            </div>
                                        )}
                                        <button className="flex justify-center items-center flex-col my-2 bg-primary-light text-black px-4 py-2 rounded-md" onClick={ uploadFile }>
                                            <h1 className="font-bold text-lg"><FontAwesomeIcon icon={faUpload} className="mr-2" size="1x"></FontAwesomeIcon> Upload file</h1>
                                        </button>
                                        {isupLoading ? <h1>{progress}%</h1>: null}
                                    </div>
                                : <div style={{height: 150}} className="flex-col flex justify-center items-center">
                                    <FontAwesomeIcon icon={faFileAlt} size="3x"/>
                                    <button className="flex justify-center items-center flex-col my-2 bg-primary-light text-black px-4 py-2 rounded-md" onClick={ openFileSelector }>
                                        <h1 className="font-bold text-lg"><FontAwesomeIcon icon={faFileUpload} className="mr-2" size="1x"></FontAwesomeIcon> Select a file</h1>
                                    </button>
                                    <p>or drag a drop a file</p>
                                </div>
                                
                            }
                        </DragAndDrop>
                        {files.length > 0 ?
                            files.map((file) => {
                                return <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 my-4 gap-4" key={file.name}>
                                            <div className="bg-primary-light bg-opacity-10 rounded-md flex flex-row justify-start items-center p-4">
                                                <div className="flex justify-center items-start flex-col w-full">
                                                    <h1>{file.name}</h1>
                                                    <p>{file.size}</p>
                                                </div>
                                                <button className="text-red-600 justify-self-end text-2xl" onClick={() => {
                                                    // var newFiles = files.splice(files.indexOf(file), 1)
                                                    const newList = files.splice(files.indexOf(file), 1)
                                                    // const arr = files.filter((item) => item.name == file.name);
                                                    setFiles(files.filter((item) => item.name != file.name))
                                                }}><FontAwesomeIcon icon={faTimesCircle} size="1x"></FontAwesomeIcon></button>
                                            </div>
                                        </div> }) : null
                        }
                        {filesContent.length > 0 ?
                            filesContent.map((file) => {
                                return <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 my-4 gap-4" key={file.name}>
                                            <div className="bg-primary-light bg-opacity-10 rounded-md flex flex-row justify-start items-center p-4">
                                                <div className="flex justify-center items-start flex-col w-full">
                                                    <h1 className="w-full truncate">{file.name}</h1>
                                                    <p>{file.lastModified}</p>
                                                </div>
                                                <button className="text-red-600 justify-self-end text-2xl" onClick={() => {
                                                    clear()
                                                }}><FontAwesomeIcon icon={faTimesCircle} size="1x"></FontAwesomeIcon></button>
                                            </div>
                                        </div> }) : null
                        }
                        <InputField placeholder="Enter file's media url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setMediaURL(e.target.value) }} value={mediaURL ?? ''}></InputField>
                        <InputField placeholder="Enter file name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}></InputField>
                        <InputArea placeholder="Enter file description" rows={4} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}></InputArea>
                        <div className="flex flex-row">
                            <PrimaryButton onClick={()=>{ addFileToStore() }}>Add File</PrimaryButton>
                            <SecondaryButton onClick={()=>{ history.goBack() }}>Cancel</SecondaryButton>
                        </div>
                    </>
                    
                }
            </div>
        </div>
    )
}

export default AddFile