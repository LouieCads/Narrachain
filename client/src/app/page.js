"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, TextField, Stack } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion" // Provides a better and more customizable animation effect.
import { X } from "lucide-react"

export default function Landing() {
  const [open, setOpen] = useState(false)
  const [isLLogin, setIsLogin] = useState(true)
  const [showNotification, setShowNotification] = useState(false)

  const handleNotification = () => {
    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 2000)
  }

  const handleOpenLogin = () => {
    setIsLogin(true)
    setOpen(true)
  }

  const handleOpenSignUp = () => {
    setIsLogin(false)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  })

  const onSubmit = (data, { resetForm }) => {
    try {
      axios
        .post("http://localhost:3308/users/registration", data)
        .then((response) => {
          resetForm()
        })
    } catch (err) {
      console.error("Error Registering: ", err)
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#080C10] from-0% to-[#171B23] to-85% text-[#EAEAEB] min-h-screen pt-3 pr-[150px] pb-5 pl-[150px]">
      <header className="flex font-inter text-[16px] font-semibold items-center gap-1">
        <Image
          src="/narrachain.png"
          alt="Narrachain logo"
          width={43}
          height={43}
        />
        Narrachain
      </header>

      <main className="flex items-center mt-7 gap-[145px]">
        <div>
          <p className="mt-16 text-[70px] text-[#EAEAEB] font-mono font-semibold leading-none tracking-tight">
            Developed for
            <span className="block text-[#1D66FE]">Crypto Enthusiast</span>
          </p>
          <p className="mt-8 mb-16 text-[18.5px] font-inter font-semibold leading-tight">
            Share, discover, and engage with the latest crypto narratives
            <span className="block">news, and community insights.</span>
          </p>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                borderRadius: "15px",
                backgroundColor: "#2663D8",
                height: "50px",
                width: "120px",
                color: "#EAEAEB",
                gap: "10px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#1d4eb5",
                  color: "#EAEAEB",
                },
              }}
              variant="contained"
              onClick={handleOpenLogin}
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
            <Button
              sx={{
                borderRadius: "15px",
                borderColor: "#EAEAEB",
                height: "50px",
                width: "130px",
                color: "#EAEAEB",
                gap: "10px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              variant="outlined"
              onClick={handleOpenSignUp}
            >
              Sign up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </Stack>
        </div>
        <div>
          <Image
            src="/narrachain.png"
            alt="Narrachain logo"
            width={465}
            height={465}
          />
        </div>
      </main>

      <AnimatePresence>
        {open && (
          <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed min-h-[600px] w-[450px] p-10 bg-white rounded-3xl shadow-2xl z-20"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <Image
                src="/narrachain.png"
                alt="Narrachain logo"
                width={70}
                height={70}
              />
              {isLLogin ? (
                <>
                  <p className="text-[18px] text-[#171B23] font-inter font-semibold">
                    Login to Narrachain
                  </p>
                  <div className="flex flex-col gap-6 mt-7">
                    <input
                      type="email"
                      className="w-[100%] h-[48px] pl-4 pr-4 border border-[#DBDEE1] text-[#171B23] text-[14px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[9px]"
                      placeholder="Enter your email"
                    />
                    <input
                      type="password"
                      className="w-[100%] h-[48px] pl-4 pr-4 border border-[#DBDEE1] text-[#171B23] text-[14px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[9px]"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-5 mb-3">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        className="mr-1"
                      />
                      <span className="text-[11px] text-[#9C9999]">
                        Remember me
                      </span>
                    </div>

                    <p className="text-[11px] text-[#1D66FE]">
                      Forgot your password?
                    </p>
                  </div>

                  <Link href="/home">
                    <Button
                      variant="contained"
                      onClick={handleNotification}
                      className="w-[100%] h-[38px] mb-5 bg-[#171B23] text-[#FFDDFF] text-[13px] font-semibold rounded-lg"
                    >
                      Login
                    </Button>
                  </Link>

                  <p className="text-[#9C9999] text-center text-[12px] mb-4">
                    Don’t have an account?{" "}
                    <span className="text-[#1D66FE]">Sign up</span>
                  </p>

                  <div className="h-[0.5px] w-[100%] bg-[#BCBCBC] mb-5"></div>

                  <p className="text-[#9C9999] text-center text-[12px] mb-5">
                    Or continue with
                  </p>

                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2.5 w-max">
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/googleicon.webp"
                          alt="Google logo"
                          width={24}
                          height={24}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/discordicon.png"
                          alt="Discord logo"
                          width={25}
                          height={25}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/xicon.png"
                          alt="X logo"
                          width={20}
                          height={20}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/telegramicon.png"
                          alt="Telegram logo"
                          width={23}
                          height={23}
                        />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[18px] ml-3 text-[#171B23] font-inter font-semibold">
                    Sign up with Narrachain
                  </p>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    <Form className="registration-form flex flex-col gap-6 mt-7">
                      <div className="relative">
                        <Field
                          type="email"
                          id="input-username"
                          name="email"
                          className="w-[100%] h-[48px] pl-4 pr-4 border border-[#DBDEE1] text-[#171B23] text-[14px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[9px]"
                          placeholder="Enter username"
                        />
                        <div className="min-h-[24px]">
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="text-[#F63030] text-[11px] ml-1"
                          />
                        </div>
                      </div>
                      <div className="relative mt-[-15px]">
                        <Field
                          type="password"
                          id="input-password"
                          name="password"
                          className="w-[100%] h-[48px] pl-4 pr-4 border border-[#DBDEE1] text-[#171B23] text-[14px] shadow-[2px_2px_4px_rgba(0,0,0,0.1)] rounded-[9px]"
                          placeholder="Enter password"
                        />
                        <div className="min-h-[24px]">
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="text-[#F63030] text-[11px] ml-1"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={handleNotification}
                        className="w-[100%] mb-5 h-[38px] bg-[#171B23] text-[#FFDDFF] text-[13px] font-semibold rounded-lg"
                      >
                        Sign up
                      </Button>
                    </Form>
                  </Formik>
                  <p className="text-[#9C9999] text-center text-[12px] mb-4">
                    Already have an account?{" "}
                    <span className="text-[#1D66FE]">Sign in</span>
                  </p>

                  <div className="h-[0.5px] w-[100%] bg-[#BCBCBC] mb-5"></div>

                  <p className="text-[#9C9999] text-center text-[12px] mb-5">
                    Or continue with
                  </p>

                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2.5 w-max">
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/googleicon.webp"
                          alt="Google logo"
                          width={24}
                          height={24}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/discordicon.png"
                          alt="Discord logo"
                          width={25}
                          height={25}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/xicon.png"
                          alt="X logo"
                          width={20}
                          height={20}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        className="flex items-center justify-center h-[50px] w-[85px] bg-[#FDFDFD] border rounded-lg p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
                        style={{ borderColor: "#DBDEE1" }}
                      >
                        <Image
                          src="/telegramicon.png"
                          alt="Telegram logo"
                          width={23}
                          height={23}
                        />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 1, x: 500 }}
                  animate={{ opacity: 1, x: [50, -40, 0] }}
                  exit={{ opacity: 0, x: 500 }} // Exit to the left
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 25,
                    duration: 0.2,
                  }}
                  className="fixed w-[325px] flex justify-end items-center h-[55px] top-5 right-5 rounded-[10px] text-[#EAEAEB] bg-[#26D871] rounded-md shadow-lg z-30"
                >
                  <div className="flex gap-3 items-center w-[320px] h-[55px] bg-[#002828] rounded-[5px] px-3 py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="#26D871"
                        className="bi bi-check-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">Success</p>
                      <p className="text-[12px]">Signed up successfully!</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 1, x: 500 }}
                  animate={{ opacity: 1, x: [50, -40, 0] }}
                  exit={{ opacity: 0, x: 500 }} // Exit to the left
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 25,
                    duration: 0.2,
                  }}
                  className="mt-[65px] fixed w-[325px] flex justify-end items-center h-[55px] top-5 right-5 rounded-[10px] text-[#EAEAEB] bg-[#F63030] rounded-md shadow-lg z-30"
                >
                  <div className="flex items-center gap-3 w-[320px] h-[55px] bg-[#2A0001] rounded-[5px] px-3 py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="#F63030"
                        className="bi bi-x-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">Failed</p>
                      <p className="text-[12px]">Email been used!</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
