import tryCatch from "../middleware/tryCatch.js";
import { Courses } from "../models/courses.js";


// export const createCourse = tryCatch(async (req, res) => {

//     console.log("------ DEBUG START ------");
//     console.log("Body:", req.body ? "Received" : "Missing");
//     console.log("File:", req.file ? "Received" : "Missing");
//     console.log("Full Body:", JSON.stringify(req.body, null, 2));
//     console.log("File Info:", req.file);
//     console.log("------ DEBUG END ------");

//     const { title, description, category, duration, price } = req.body || {};
//     const image = req.file;

//     if (!title || !description || !category || !price) {
//         return res.status(400).json({
//             message: 'All fields are required'
//         });
//     }

//     const course = await Courses.create({
//         title,
//         description,
//         image: image?.path,
//         category,
//         createdBy: req.user._id,
//         duration,
//         price
//     });

//     return res.status(201).json({
//         message: "Course created successfully",
//         course
//     });

// });




export const createCourse = tryCatch(async (req, res) => {
    
    console.log("Body Error =>", req.body);
    console.log("File Error=>", req.file);

    const { title, description, category, createdBy, duration, price } = req.body;
    console.log("Body Error =>", req.body);
    console.log("File Error=>", req.file);
    const image = req.file;




    if (!title || !description || !category || !price) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }

    // if(!image){
    //     return res.json(400).json({
    //         message:'Image is required'
    //     })
    // }

    const course = await Courses.create({
        title,
        description,
        image: image?.path,
        category,
        createdBy,
        duration,
        price
    })

    return res.status(201).json({
        message: "Course created successfully",
        course
    });


})  