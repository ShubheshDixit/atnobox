import { useState } from "react";
import { useHistory } from "react-router";
import { v4 } from "uuid";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { InputField, InputArea } from "../components/inputs"
import { addProject } from "../services/db_utils";
import successImgURL from '../assets/Success.png'

function AddProject() {
    const [isDone, setDone] = useState<Boolean>(false);
    const [description, setDescription] = useState<String | null>(null);
    const [title, setTitle] = useState<String | null>(null);
    const [imageURL, setImageURL] = useState<String | null>(null);
    const history = useHistory()

    async function createProject() {
        if(title != null) {
            let id:String = v4().replaceAll('-', '').substr(10)
            try{
                await addProject(id, title, description, imageURL)
                setDone(true)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="flex flex-col w-full justify-start items-center h-full overflow-x-auto">
            <div className="felx flex-col max-w-screen-md w-full justify-center items-center bg-primary-light bg-opacity-5 p-8 rounded-md mt-8">
                {isDone ?
                    <div className="flex justify-center items-center flex-col">
                        <img src={successImgURL} alt="success" className="w-64 h-64"/>
                        <h1 className="font-bold text-2xl animate-bounce">Project Added Successfully!</h1>
                        <PrimaryButton onClick={()=>{ history.push('/') }}>Go to Home</PrimaryButton>
                    </div> :
                    <>
                        <h1 className="text-lg p-1 font-bold">Create a new project</h1>
                        <InputField placeholder="Enter project's image url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImageURL(e.target.value) }}></InputField>
                        <InputField placeholder="Enter project name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}></InputField>
                        <InputArea placeholder="Enter project description" rows={4} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}></InputArea>
                        <div className="flex flex-row">
                            <PrimaryButton onClick={()=>{ createProject() }}>Create Project</PrimaryButton>
                            <SecondaryButton onClick={()=>{ history.goBack() }}>Cancel</SecondaryButton>
                        </div>
                    </>
                    
                }
            </div>
        </div>
    )
}

export default AddProject