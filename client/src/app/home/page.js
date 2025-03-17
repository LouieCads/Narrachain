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
        <Form className="flex gap-3 w-[100] h-[135px] px-6 py-4 rounded-[25px] border border-[#C7CDD4] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] mb-3">
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
          <div className="mt-auto">
            <button
              type="submit"
              className="w-[80px] h-[40px] bg-[#1D66FE] rounded-full text-[14px] font-semibold"
            >
              Post
            </button>
          </div>
        </Form>
      </Formik>

      <div className="mb-2 min-h-[150px] w-[100] flex flex-col rounded-[25px] border border-[#C7CDD4] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] py-4 px-6 text-[#171B21]">
        <div className="flex items-center gap-2">
          <Avatar
            alt="Louie"
            src="../public/narrachain.png"
            sx={{
              background: "#1D66FE",
              height: "35px",
              width: "35px",
            }}
          />
          <div>
            <p>
              Louie{" "}
              <span className="text-[13px] text-[#171B21] opacity-60">
                @louie
              </span>
            </p>
            <p className="text-[11px] text-[#171B21] opacity-60">3 hours ago</p>
          </div>
        </div>
        <div className="flex-grow mt-4 text-[15px] text-[#171B21]">Content</div>
        <div className="flex justify-between mt-auto">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#3F3F3F"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <p className="text-[11px] text-[#3F3F3F]">21</p>
          </div>

          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3F3F3F"
                className="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
              </svg>{" "}
              <p className="text-[11px] text-[#3F3F3F]">21</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3F3F3F"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>{" "}
              <p className="text-[11px] text-[#3F3F3F]">21</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3F3F3F"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
              <p className="text-[11px] text-[#3F3F3F]">21</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#3F3F3F"
              className="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
