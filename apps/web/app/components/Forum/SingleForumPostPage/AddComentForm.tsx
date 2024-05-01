'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import CustomTextArea from '../../Inputs/TextArea/CustomTextArea'
import { PrimaryButton } from '../../Buttons/PrimaryButton'
export const AddComentForm = () => {
    const formik = useFormik({
        initialValues:{
            comment:''
        },
        validationSchema: Yup.object({
            comment:Yup.string().required()
        }),
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <div className='mt-[20px] flex gap-[15px] gap-y-[5px] sb:flex-row flex-col dark:bg-transparent bg-white p-[10px] rounded-[5px]'>
        <CustomTextArea
            id='comment'
            name='comment'
            className=''
            value={formik.values.comment}
            onChange={(e)=>formik.setFieldValue('comment',e)}
        />
        <PrimaryButton variant='primary' className='text-[15px] dark:text-white h-fit'>
            Comment
        </PrimaryButton>
    </div>
  )
}
