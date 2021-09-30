import { DocumentData, getDocs, QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore'
import { faTimes, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase_client'
import { removeLink } from '../services/db_utils'
import LinkTile from '../components/LinkTile'

export default function LinksView() {
    const [projects, setProjects] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getLinks()
    }, [projects])

    async function getLinks() {
        if(projects == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'links'), where('userId', '==', auth.currentUser?.uid)))
           setProjects(docsSnap.docs)
        }
    }

    return (
        <div className="w-full my-0">
            {projects && projects.map((e)=>{
                return (
                    <LinkTile key={e.id}  data={e.data()} onClick={async ()=>{
                        await removeLink(e.id)
                        setProjects(null)
                    }}></LinkTile>
                )
            })}
        </div>
    )
}
