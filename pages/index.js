import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}
