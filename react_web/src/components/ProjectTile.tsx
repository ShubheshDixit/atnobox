import React from 'react'
import { DocumentData } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function ProjectTile(props: ProjectProps) {
    return (
        <Link to={`projects/${props.data.id}`} className="w-full bg-primary-light bg-opacity-5 hover:bg-opacity-10 flex-row flex p-8 justify-start items-center rounded-md my-4" >
            {props.data.imageURL && <img src={props.data.imageURL} alt={props.data.title} className="w-12 h-12 sm:w-20 sm:h-20 mr-4 object-contain"/> }
            <div className="flex flex-col justify-center items-start w-full">
                <h1 className="font-bold text-primary-light text-xl sm:text-2xl">{props.data.title}</h1>
                <p className="text-left w-full pr-2">
                    <textarea className="w-full overflow-hidden overflow-ellipsis text-white bg-transparent resize-none focus:outline-none" value={props.data.description} readOnly></textarea>
                </p>
            </div>
            <button className="h-10 w-10 rounded-full justify-center items-center flex bg-red-600 bg-opacity-0 text-red-600 " onClick={props.onClick}><FontAwesomeIcon icon={faTrashAlt} size="1x"></FontAwesomeIcon></button>
        </Link>
    )
}

interface ProjectProps {
    data: DocumentData,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}