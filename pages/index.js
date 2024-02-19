// pages/[RoomName].js
import React, {useContext, useRef, useState} from 'react';
import { motion } from 'framer-motion';
import {Button, Input, message} from 'antd';
import Head from 'next/head';
import { Zap } from 'react-feather';
import {StoreContext} from "/Context/StoreContextProvider";
import { useRouter } from 'next/router';

const Index = () => {
    const router =useRouter()
    const [userName, setUserName] = useState("");
    const { setName } = useContext(StoreContext);

    //function for notify error
    const error = () => {
        message.error("Please Enter A room Name");
    };

    //function for notify success
    const success = () => {
        message.success("room Created Succesfully");
    };

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            if (userName === "") {
                error();
                return;
            }
            document.getElementById("createButton").click();
        }
    };

    const create = () => {
        if (userName === "") {
            error();
            return;
        }
        //const id = uuid();
        setName(userName.toUpperCase());
        localStorage.setItem("name", userName.toUpperCase());
        console.log(userName)
        success();
        router.push(`/room/${userName.toLowerCase()}`)
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Head>
                <title>weshare</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                      integrity="sha512-C13SmAClddMf8k0yZlrV5FAdQPkY3kic2F0xyLOVzUhJPnCY3q1LrRO+ctu4o3Sy6LmDYP7JeTLGj0T2tbXbcg=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            {/* Left side with file transfer-like animation */}
            <div className="flex-1 flex justify-center items-center">
                <motion.div
                    className="glowingZap"
                    animate={{ x: [0, 20, 0], y: [0, 20, 0]}}
                    transition={{duration: 1.5, repeat: Infinity}}
                >
                    <Zap size={500} color="yellow" enableBackground={false.toString()}/>
                </motion.div>
            </div>
            {/* Right side with Ant Design Input */}
            <div className="flex-1 flex flex-col justify-center items-center px-8">
                <h1 className="text-3xl text-center font-bold mb-4">Transfer Files like never before <br/> <span
                    className="text-yellow-500">⚡ weshare</span></h1>
                <Input
                    placeholder="Enter room name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onPressEnter={()=>create()}
                    className="w-64"
                />

                <Button
                    onClick={create}
                    id="createButton"
                    className="body__button"
                    type="primary"
                >
                    Create Room
                </Button>

            </div>
        </div>
    );
};

export default Index;
