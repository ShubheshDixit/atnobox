import { DocumentData, getDocs, QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import ProjectTile from '../components/ProjectTile'
import { auth, db } from '../firebase_client'
import { removeProject } from '../services/db_utils'

export default function ProjectView() {
    const history = useHistory()
    const [projects, setProjects] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getProjects()
    }, [projects])

    async function getProjects() {
        if(projects == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'projects'), where('userId', '==', auth.currentUser?.uid)))
           setProjects(docsSnap.docs)
        }
    }

    return (
        <div className="w-full my-0">
            {projects && projects.map((e)=>{
                return (
                    <ProjectTile key={e.id} data={e.data()} onClick={async () => {
                        await removeProject(e.id)
                        setProjects(null)
                    }}></ProjectTile>
                )
            })}
        </div>
    )
}
