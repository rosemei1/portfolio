import { useState, useEffect } from 'react'

import { Instagram, CircleUser, Linkedin, Github, Flower, FileUser, Menu, X} from 'lucide-react'
import { SiTensorflow, SiPython, SiKeras, SiPandas, SiNumpy, SiMicrosoftsqlserver, SiAndroidstudio, SiFlutter, SiGit} from 'react-icons/si'

import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {Tooltip} from 'react-tooltip';

import pan from "./assets/images/pan.jpg"
import leaflens from "./assets/images/leaflens.jpg"
import eling from "./assets/images/eling.jpg"
import pmi from "./assets/images/pmi.jpg"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      name: 'LeafLens',
      description: 'Your AI-powered guide to unlocking the secrets of Indonesian herbal plants.',
      images: [leaflens]
    },
    {
      name: 'E-Ling',
      description: 'Edukasi Lingkungan, an environmental education app focused on waste management. It covers waste types, management methods, and the impact on the environment and health, aiming to raise public awareness of responsible waste disposal.',
      images: [eling]
    },
    {
      name: 'Panasonic Manufacturing Indonesia - Internship',
      description: 'Help air conditioner business unit making dashboard to monitor and create production planning',
      images: [pmi]
    },
    {
      name: 'Publication',
      description: (
        <>
          <a 
            href="https://ieeexplore.ieee.org/document/10665862" 
            target="_blank" 
            style={{textDecoration: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Convolutional Neural Network Implementation with MobileNetV2 Architecture for Indonesian Herbal Plants Classification in Mobile App
          </a>
        </>
      ),
      images: []
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: mounted ? 1 : 0 }} 
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#56453e', color:'#e0d7c7'}}
      className="min-h-screen p-4 md:p-8"
    >
      <header className="flex justify-between items-center mb-4 p-4 rounded-lg" style={{backgroundColor: '#211c1d'}}>
        <motion.h2 
          initial={{ x: -50 }} 
          animate={{ x: 0 }} 
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          style={{color:'#e0d7c7'}}
          className="text-2xl font-bold ms-4"
        >
          Irfan | My Portfolio
        </motion.h2>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <nav className="hidden lg:flex space-x-12 me-4">
          <motion.a 
            href="#about" 
            style={{color:'#e0d7c7'}}
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#projects"
            style={{color:'#e0d7c7'}}
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience
          </motion.a>
          <motion.a 
            href="#skillset" 
            style={{color:'#e0d7c7'}}
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tech Stack
          </motion.a>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="absolute top-16 right-0 bg-[#211c1d] text-[#e0d7c7] p-6 rounded-lg space-y-4 lg:hidden z-50 mt-4 me-4 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 50 }}
            >
              <a
                href="#about"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                ABOUT
              </a>
              <a
                href="#projects"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                PROJECTS
              </a>
              <a
                href="#skillset"
                className="block hover:underline"
                onClick={toggleMenu}
              >
                TECH STACK
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.section 
          className="bg-pink-100 p-6 rounded-lg col-span-1 flex flex-col justify-between"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ backgroundColor: '#211c1d'}}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Data Enthusiast</h2>
            <h2 className="text-4xl font-light mb-2">Bridging AI</h2>
            <h2 className="text-4xl font-bold mb-2">and Analytics</h2>
            <h2 className="text-4xl font-light">for Real-World Impact</h2>
          </div>
          <Flower className="w-24 h-24 mt-4" strokeWidth={1}/>
        </motion.section>

        <motion.section 
          className="rounded-lg overflow-hidden"
          style={{ backgroundColor: '#211C1D'}}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <img
            src={pan}
            alt="pan"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.section>

        <motion.section 
          id="projects"
          style={{ backgroundColor: '#211C1D'}}
          className="p-6 rounded-lg col-span-1 lg:row-span-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Accordion type="single" collapsible defaultValue="LeafLens" className="h-full overflow-y-auto">
            {projects.map((project) => (
              <AccordionItem value={project.name} key={project.name}>
                <AccordionTrigger>{project.name}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${project.name} project image ${imgIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        <motion.section 
          id="about"
          style={{ backgroundColor: '#211C1D'}}
          className="p-6 rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <CircleUser className="w-8 h-8 mb-4" strokeWidth={1}></CircleUser>
          <p className="text-sm">
            Irfan Hanif Khoiru Rijal, AI and data science enthusiast based in Surabaya, focused on leveraging technology for innovative mobile development solutions. I blend technical skills with creativity to make technology impactful and accessible.
          </p>
        </motion.section>

        <motion.section 
          id="skillset"
          style={{ backgroundColor: '#211C1D'}}
          className="p-6 rounded-lg relative flex flex-col items-start"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <p className="font-bold mb-6">Tech Stack</p>
          <div className="flex flex-wrap space-x-6 mb-4">
            <SiTensorflow className="w-9 h-9 mb-4" data-tooltip-content="TensorFlow" data-tooltip-id="techTooltip" />
            <SiPython className="w-9 h-9 mb-4" data-tooltip-content="Python" data-tooltip-id="techTooltip" />
            <SiKeras className="w-9 h-9 mb-4" data-tooltip-content="Keras" data-tooltip-id="techTooltip" />
            <SiNumpy className="w-9 h-9 mb-4" data-tooltip-content="NumPy" data-tooltip-id="techTooltip" />
            <SiPandas className="w-9 h-9 mb-4" data-tooltip-content="Pandas" data-tooltip-id="techTooltip" />
            <SiMicrosoftsqlserver className="w-9 h-9 mb-4" data-tooltip-content="Microsoft SQL Server" data-tooltip-id="techTooltip" />
            <SiAndroidstudio className="w-9 h-9 mb-4" data-tooltip-content="Android Studio" data-tooltip-id="techTooltip" />
            <SiFlutter className="w-9 h-9 mb-4" data-tooltip-content="Flutter" data-tooltip-id="techTooltip" />
            <SiGit className="w-9 h-9 mb-4" data-tooltip-content="Git" data-tooltip-id="techTooltip" />

            <Tooltip
              id="techTooltip"
              place="top"
              style={{
                backgroundColor:"#e0d7c7",
                color:"#211C1D", fontWeight:"bold"}}
              delayShow={200}
            />
          </div>
        </motion.section>


      </main>
      <motion.footer 
          className="p-4 rounded-lg flex justify-center items-center mt-4"
          style={{ backgroundColor: '#211C1D'}}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/ivy_nf/" className="hover:text-[#f1e2ad]"><Instagram className="w-5 h-5" /></a>
            <a href="https://github.com/rosemei1" className="hover:text-[#f1e2ad]"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/irfanhnf/" className="hover:text-[#f1e2ad]"><Linkedin className="w-5 h-5" /></a>
            <a href="https://drive.google.com/file/d/1UzlTjx44HFJtKx7dJoWJrufhZSTSBiv8/view?usp=sharing" className="hover:text-[#f1e2ad]"><FileUser className="w-5 h-5" /></a>
          </div>
        </motion.footer>
    </motion.div>
  )
}