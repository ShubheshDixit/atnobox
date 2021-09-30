import React from 'react'
import { PrimaryButton } from './buttons'
import { InputField } from './inputs'
import contactImg from '../assets/Support.png'

export default function Support() {
    return (
        <div className="w-full max-w-screen-md flex flex-col p-4">
            <div className="w-full border-t-2 border-primary-light border-opacity-20 flex flex-col border-dashed">
                <div className="flex flex-col justify-center md:flex-row md:justify-between items-center p-4">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-primary-light font-bold text-lg">
                            Join our newsletter
                        </h1>
                        <InputField placeholder="Enter you email"></InputField>
                        <PrimaryButton style={{width: '100%'}}>Subscribe</PrimaryButton>
                    </div>
                    <img src={contactImg} alt="" className="h-64 w-auto"/>
                </div>
            </div>
        </div>
    )
}
