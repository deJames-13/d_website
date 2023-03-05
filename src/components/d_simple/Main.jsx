/* eslint-disable no-unused-vars */
import { easeIn, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Avatar from './Avatar';
import Info from './Info';
import './Main.css';
import MessageBox from './MessageBox';
import MsgPage from './MsgPage';

// const API_URL = 'http://127.0.0.1:8000/msg/message/';
const API_URL = 'https://d-api-three.vercel.app/msg/message/';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reload = async () => {
      const fetchedData = await fetchData(API_URL);
      setData(fetchedData);
    };
    reload();
  }, []);
  const postMsg = async (d) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(d),
    }).catch((err) => {
      console.log(err.message);
    });
  };

  const onSend = async (txt) => {
    if (txt.trim() === '') {
      return;
    }
    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    const newData = { msg: txt, day: date };
    await postMsg(newData);
  };

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const newData = await res.json();
      return newData;
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className='App'>
        <div className='main'>
          <div className='container dark'>
            <Routes>
              <Route
                path='/mymessages'
                element={<MsgPage data={data} />}
              ></Route>
              <Route path='/' element={<Info />} />
              <Route
                path='/message.me'
                element={
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: [-100, 0],
                        justifyContent: 'center',
                      }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 150,
                      }}
                      className='avatar-wrapper'
                      id='msg'
                    >
                      <Avatar />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <MessageBox sendMsg={onSend} />
                    </motion.div>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
