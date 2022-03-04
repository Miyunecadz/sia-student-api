const { PrismaClient } = require(".prisma/client");
const prisma = new PrismaClient()
const casual = require('casual')

async function create(){

    const student = await prisma.student.create({
        data: {
            firstname: casual.first_name,
            middlename: casual.middlename,
            lastname: casual.last_name,
            purok: casual.street,
            barangay: casual.address1,
            municipality: casual.address2,
            province: casual.state,
            zip_code: casual.integer(from=100, to=999),
            mother_name: casual.full_name,
            mother_occupation: casual.string,
            father_name: casual.full_name,
            father_occupation: casual.string,
            course: 'Information Technology',
            major: 'Networking',
            school_id_number: casual.integer(from = 0, to = 99999) + "-" + casual.integer(from= 1, to=2)
        }
    })
    
    console.log(student)
}

create()