import { useState, useEffect } from 'react'
import { ArrowUpRight, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      name: 'Musea',
      description: 'An AI-driven virtual museum experience that adapts to user preferences.',
      images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']
    },
    {
      name: 'Elara',
      description: 'A smart home system that learns and anticipates resident needs.',
      images: ['/placeholder.svg?height=300&width=400']
    },
    {
      name: 'Verve',
      description: 'An AI-powered digital art creation tool for aspiring artists.',
      images: ['/placeholder.svg?height=300&width=400']
    },
    {
      name: 'Zephyr',
      description: 'An environmentally conscious AI that optimizes urban planning.',
      images: ['/placeholder.svg?height=300&width=400']
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: mounted ? 1 : 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-pink-50 text-gray-900 p-4 md:p-8"
    >
      <header className="flex justify-between items-center mb-8">
        <motion.h1 
          initial={{ x: -50 }} 
          animate={{ x: 0 }} 
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="text-2xl font-bold"
        >
          JULIA HUANG
        </motion.h1>
        <nav className="space-x-4">
          <motion.a 
            href="#projects" 
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            PROJECTS
          </motion.a>
          <motion.a 
            href="#about" 
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:underline"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            CONTACT
          </motion.a>
        </nav>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.section 
          className="bg-pink-100 p-6 rounded-lg col-span-1 flex flex-col justify-between"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Artist Redefining</h2>
            <h2 className="text-4xl font-light mb-2">Architecture</h2>
            <h2 className="text-4xl font-bold mb-2">with AI-Driven</h2>
            <h2 className="text-4xl font-bold">Design</h2>
          </div>
          <div className="w-24 h-24 border-2 border-pink-300 rounded-full mt-4"></div>
        </motion.section>

        <motion.section 
          className="bg-neutral-200 rounded-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Julia Huang"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.section>

        <motion.section 
          id="projects"
          className="bg-pink-100 p-6 rounded-lg col-span-1 lg:row-span-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Accordion type="single" collapsible defaultValue="Musea" className="h-full overflow-y-auto">
            {projects.map((project, index) => (
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
          className="bg-pink-100 p-6 rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <div className="animate-spin w-8 h-8 border-2 border-pink-300 rounded-full border-t-transparent mb-4"></div>
          <p className="text-sm">
            Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
          </p>
        </motion.section>

        <motion.section 
          id="contact"
          className="bg-pink-200 p-6 rounded-lg flex justify-between items-end"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <div>
            <p className="mb-4">Have some questions?</p>
            <h2 className="text-4xl font-bold">Contact me</h2>
          </div>
          <ArrowUpRight className="w-8 h-8" />
        </motion.section>
      </main>
      <motion.footer 
          className="bg-pink-100 p-4 rounded-lg flex justify-between items-center mt-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-pink-500"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-pink-500"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.footer>
    </motion.div>
  )
}