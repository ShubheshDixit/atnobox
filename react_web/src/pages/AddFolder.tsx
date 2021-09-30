import { useState } from "react";
import { useHistory } from "react-router";
import { v4 } from "uuid";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { InputField, InputArea } from "../components/inputs"
import { addFolder, addProject } from "../services/db_utils";
import successImgURL from '../assets/Success.png'

function AddFolder() {
    const [isDone, setDone] = useState<Boolean>(false);
    const [description, setDescription] = useState<String | null>(null);
    const [title, setTitle] = useState<String | null>(null);
    const [imageURL, setImageURL] = useState<String | null>(null);
    const history = useHistory()

    async function createFolder() {
        if(title != null) {
            let id:string = v4().toString().replaceAll('-', '').substr(10)
            try{
                await addFolder(id, title, description, imageURL)
                setDone(true)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="flex flex-col w-full justify-start items-center h-full">
            <div className="felx flex-col max-w-screen-md w-full justify-center items-center bg-primary-light bg-opacity-5 p-8 rounded-md mt-8">
                {isDone ?
                    <div className="flex justify-center items-center flex-col">
                        <img src={successImgURL} alt="success" className="w-64 h-64"/>
                        <h1 className="font-bold text-2xl animate-bounce">Folder Added Successfully!</h1>
                        <PrimaryButton onClick={()=>{ history.push('/files') }}>Go to Home</PrimaryButton>
                    </div> :
                    <>
                        <h1 className="text-lg p-1 font-bold">Create a new folder</h1>
                        <InputField placeholder="Enter folder's image url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImageURL(e.target.value) }}></InputField>
                        <InputField placeholder="Enter folder name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}></InputField>
                        <InputArea placeholder="Enter folder description" rows={4} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}></InputArea>
                        <div className="flex flex-row">
                            <PrimaryButton onClick={()=>{ createFolder() }}>Create Folder</PrimaryButton>
                            <SecondaryButton onClick={()=>{ history.goBack() }}>Cancel</SecondaryButton>
                        </div>
                    </>
                    
                }
            </div>
        </div>
    )
}

export default AddFolder