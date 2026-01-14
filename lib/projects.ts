export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectData = {
  title: string
  images: ProjectImage[]
}

// Map project images from the public/projects folder
export const projectGalleries: Record<string, ProjectImage[]> = {
  "Kalavati Patwardhan Rotary Skin Bank": [
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/1.JPG", alt: "Skin Bank Facility" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/2.JPG", alt: "Skin Bank Equipment" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/3.JPG", alt: "Skin Bank Laboratory" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/4.JPG", alt: "Skin Bank Operations" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/5.JPG", alt: "Skin Bank Medical Team" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/6.JPG", alt: "Skin Bank Facility View" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/7.JPG", alt: "Skin Bank Infrastructure" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/8.JPG", alt: "Skin Bank Services" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/9.JPG", alt: "Skin Bank Medical Equipment" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/10.JPG", alt: "Skin Bank Laboratory Setup" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/11.JPG", alt: "Skin Bank Professional Staff" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/12.JPG", alt: "Skin Bank Operational Area" },
    { src: "/projects/Kalavati Patwardhan Rotary Skin Bank/13.JPG", alt: "Skin Bank Complete View" },
  ],
  "Rambhau Bhide Public Swimming Pool": [
    { src: "/projects/Rambhau Bhide Public Swimming Pool/1.JPG", alt: "Swimming Pool View" },
    { src: "/projects/Rambhau Bhide Public Swimming Pool/2.JPG", alt: "Pool Facilities" },
    { src: "/projects/Rambhau Bhide Public Swimming Pool/3.jpg", alt: "Pool Area" },
    { src: "/projects/Rambhau Bhide Public Swimming Pool/4.JPG", alt: "Swimming Pool Complex" },
  ],
  "Chintamanrao College of Commerce Building": [
    { src: "/projects/Chintamanrao College of Commerce Building/1.jpg", alt: "College Building" },
  ],
  "Deaf and Dumb School, Miraj": [
    { src: "/projects/Deaf and Dumb School, Miraj/1.jpg", alt: "School Campus" },
    { src: "/projects/Deaf and Dumb School, Miraj/2.jpg", alt: "School Building" },
    { src: "/projects/Deaf and Dumb School, Miraj/3.jpg", alt: "Classroom" },
    { src: "/projects/Deaf and Dumb School, Miraj/4.jpg", alt: "School Facilities" },
    { src: "/projects/Deaf and Dumb School, Miraj/6.jpg", alt: "Student Activities" },
    { src: "/projects/Deaf and Dumb School, Miraj/7.jpg", alt: "School Infrastructure" },
    { src: "/projects/Deaf and Dumb School, Miraj/8.jpg", alt: "Learning Environment" },
    { src: "/projects/Deaf and Dumb School, Miraj/9.jpg", alt: "School Premises" },
    { src: "/projects/Deaf and Dumb School, Miraj/10.jpg", alt: "Educational Facilities" },
  ],
  "Usha Mohini Disable Rehabilitation Center": [
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/1.JPG", alt: "Rehabilitation Center" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/2.jpg", alt: "Therapy Room" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/3.jpg", alt: "Center Facilities" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/4.jpg", alt: "Rehabilitation Services" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/5.jpg", alt: "Therapy Equipment" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/6.JPG", alt: "Rehabilitation Programs" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/7.jpg", alt: "Center Infrastructure" },
    { src: "/projects/Usha Mohini Disable Rehabilitation Center/8.jpg", alt: "Support Services" },
  ],
  "Community Halls, Ganesh Nagar": [
    { src: "/projects/Community Halls, Ganesh Nagar/1.JPG", alt: "Community Hall Exterior" },
    { src: "/projects/Community Halls, Ganesh Nagar/2.JPG", alt: "Hall Interior" },
  ],
  "Kantibhai Shah Lawn": [
    { src: "/projects/Kantibhai Shah Lawn/1.JPG", alt: "Lawn Garden View" },
    { src: "/projects/Kantibhai Shah Lawn/2.JPG", alt: "Garden Area" },
  ],
  "Educational Scholarships": [
    { src: "/projects/Educational Scholarships/1.jpg", alt: "Scholarship Distribution" },
  ],
  "Rotary Complex, Ganesh Nagar": [
    { src: "/projects/Rotary Complex, Ganesh Nagar/1.JPG", alt: "Rotary Complex Building" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/2.jpg", alt: "Complex Facilities" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/3.jpg", alt: "Complex Infrastructure" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/4.jpg", alt: "Administrative Area" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/5.jpg", alt: "Meeting Spaces" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/6.jpg", alt: "Complex Premises" },
    { src: "/projects/Rotary Complex, Ganesh Nagar/7.jpg", alt: "Community Center" },
  ],
  "Environmental Initiatives": [
    { src: "/projects/Environmental Initiatives/1.JPG", alt: "Tree Plantation Drive" },
    { src: "/projects/Environmental Initiatives/2.JPG", alt: "Environmental Activities" },
    { src: "/projects/Environmental Initiatives/3.JPG", alt: "Green Initiative" },
    { src: "/projects/Environmental Initiatives/4.JPG", alt: "Community Participation" },
    { src: "/projects/Environmental Initiatives/5.JPG", alt: "Environmental Programs" },
    { src: "/projects/Environmental Initiatives/6.JPG", alt: "Sustainability Projects" },
  ],
}
