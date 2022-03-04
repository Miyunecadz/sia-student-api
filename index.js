const express = require('express')
const {PrismaClient} = require('@prisma/client')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// arrow function
app.get('/students', async(req,res) => {
    try{
        const allStudents = await prisma.student.findMany()
        res.send(allStudents)
    }catch(e){
        throw e
    }finally{
        await prisma.$disconnect
    }
})

app.post('/students', async function(request, response) {
    const student = await prisma.student.create({
        data: request.body
    })
    
    response.json({"status": "created", "data": student}).status(201)
})


app.get('/students/:id', async(req,res) => {
    const student_id = parseInt(req.params.id)
    const student = await prisma.student.findUnique({
        where:{
            id: student_id
        }
    })

    if(student == null){
        return res.sendStatus(404)
    }
    
    res.json({"student": student})

})

async function createObject(body){
    const keys = Object.keys(body)
    const newObject = {}

    for (let index = 0; index < keys.length; index++) {   
        // newObject[keys[index]] = "sample"
        newObject[keys[index]] = body[keys[index]]
    }
    
    return await newObject
}

app.put('/students/:id', async(req,res)=>{
    const student_id = parseInt(req.params.id)
    const datas = await createObject(req.body)
    

    const studentSearch = await prisma.student.findUnique({
        where:{
            id: student_id
        }
    })

    if(studentSearch == null){
        return res.sendStatus(404)
    }

    const student = await prisma.student.update({
        where:{
            id:student_id
        },
        data:datas
    })

    res.send(student)
})

app.delete('/students/:id', async (req,res) => {
    
    const student_id = parseInt(req.params.id)

    const studentSearch = await prisma.student.findUnique({
        where:{
            id: student_id
        }
    })

    if(studentSearch == null){
        return res.sendStatus(404)
    }

    const student = await prisma.student.delete({
        where:{
            id: student_id
        }
    })

    res.json({"status": "Delete"})
})


app.listen(3000, () => {
    console.log('server running at port 3000')
})