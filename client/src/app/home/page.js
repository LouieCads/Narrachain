"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, TextField, Stack, Avatar } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

import PublicLayout from "../components/PublicLayout"

export default function Home() {
  const initialValues = {
    post: "",
  }

  const validationSchema = Yup.object().shape({
    post: Yup.string().required(),
  })

  const onSubmit = (data, { resetForm }) => {
    try {
    } catch {}
  }

  return (
    <PublicLayout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form className="flex gap-3 w-[100] h-[135px] px-4 py-3 rounded-[25px] border border-[#C7CDD4] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] mb-3">
          <Avatar
            alt="Louie"
            src="../public/narrachain.png"
            sx={{
              background: "#1D66FE",
              height: "35px",
              width: "35px",
            }}
          />
          <Field
            id="input-post"
            name="post"
            className="w-[80%] h-[40px] px-3 text-[#171B21] outline-none focus:border-none"
            placeholder="What’s the narrative?"
          ></Field>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-[80px] h-[40px] bg-[#1D66FE] rounded-full text-[14px] font-semibold"
            >
              Post
            </button>
          </div>
        </Form>
      </Formik>

      <div className="mb-2 min-h-40 w-[100] rounded-[25px] border border-[#C7CDD4] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] py-4 px-5 text-[#171B21]">
        <div className="">
          <p>Content</p>
        </div>
      </div>
    </PublicLayout>
  )
}
