"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#EAEAEB]  min-h-screen">
      <h1 className="text-black">Welcome to My Homepage</h1>
      <p className="text-black">This is my Next.js homepage.</p>
    </div>
  );
}
