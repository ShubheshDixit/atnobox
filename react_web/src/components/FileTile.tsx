import React from 'react'
import { DocumentData } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFileAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function FileTile(props: FileTileProps) {
    return (
        <Link to={`/file-view/${props.data.id}`} className="w-full bg-primary-light bg-opacity-5 hover:bg-opacity-10 flex-row flex p-6 justify-start items-center rounded-md">
            {/* {props.data.mediaURL && <img src={props.data.mediaURL} alt={props.data.title} className="w-12 h-12 sm:w-20 sm:h-20 mr-4 object-contain"/> } */}
            <FontAwesomeIcon icon={faFileAlt} size="2x" className="text-primary-light mr-4"/>
            <div className="flex flex-col justify-center items-start w-full pr-4">
                <h1 className="font-bold text-primary-light text-xl sm:text-xl truncate w-full pr-4">{props.data.title}</h1>
                <p>{props.data.createdAt.toDate().toDateString()}</p>
            </div>
        </Link>
    )
}

interface FileTileProps {
    data: DocumentData,
}