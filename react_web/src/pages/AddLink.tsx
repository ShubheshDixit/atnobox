import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { v4 } from 'uuid'
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { InputArea, InputField } from "../components/inputs";
import { addLink } from "../services/db_utils";
import DropDown from "../components/dropDown";
import { collection, DocumentData, DocumentSnapshot, getDocs, query, QueryDocumentSnapshot, QuerySnapshot } from "@firebase/firestore";
import { db } from "../firebase_client";
import successImgURL from '../assets/Success.png'

function AddLink() {
    const [isDone, setDone] = useState<Boolean>(false);
    const [url, setURL] = useState<String | null>(null);
    const [projectName, setProjectName] = useState<String | null>(null);
    const [projectId, setProjectID] = useState<String | null>(null);
    const [imageURL, setImageURL] = useState<String | null>(null);
    const [title, setTitle] = useState<String | null>(null);
    const [description, setDescription] = useState<String | null>(null);
    const history = useHistory()
    const [projectsList, setProjectsList] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    async function saveLink() {
        let id: String = v4().replaceAll('-', '').substr(10)
        if(projectId != null && url != null && title != null) {
            try {
                await addLink(id, projectId, url, imageURL, title)
                setDone(true)
            } catch (err){
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getProjects()
    }, [projectsList])

    async function getProjects() {
        if(projectsList == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'projects')))
           setProjectsList(docsSnap.docs)
        }
    }

    return (
        <div className="flex flex-col w-full justify-start items-center h-full overflow-x-auto">
            <div className="felx flex-col max-w-screen-md w-full justify-center items-center bg-primary-light bg-opacity-5 p-8 rounded-md mt-8">
            {isDone ?
                    <div className="flex justify-center items-center flex-col">
                        <img src={successImgURL} alt="success" className="w-64 h-64"/>
                        <h1 className="font-bold text-2xl animate-bounce">Link Added Successfully!</h1>
                        <PrimaryButton onClick={()=>{ history.push('/') }}>Go to Home</PrimaryButton>
                    </div> :
                    <>
                        <h1 className="text-lg p-1 font-bold">Add a new link</h1>
                        <InputField placeholder="Enter link url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setURL(e.target.value) }}></InputField>
                        <InputField placeholder="Enter link title" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}></InputField>
                        <InputField placeholder="Enter link image url" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImageURL(e.target.value) }}></InputField>
                        <InputArea placeholder="Enter link description" rows={4} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}></InputArea>
                        <DropDown placeholder="Select project" value={projectName} isOpen={false}>
                            {projectsList != null ?
                                projectsList.map((e) => {
                                    return (
                                        <button className="p-4 w-full flex flex-col items-start group" key={e.id} onClick={()=>{
                                            setProjectID(e.id)
                                            setProjectName(e.data().title)
                                        }}>
                                            <h1 className="text-lg group-hover:text-primary-light font-bold">{ e.data().title }</h1>
                                        </button>
                                    )
                                }) : null
                            }
                        </DropDown>
                        <div className="flex flex-row">
                            <PrimaryButton onClick={()=>{ saveLink() }}>Add Link</PrimaryButton>
                            <SecondaryButton onClick={()=>{ history.goBack() }}>Cancel</SecondaryButton>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default AddLink