import React from "react";
import Card from "../../public/Card";

const AllCards = () => {
  const jobsData = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer",
      logo: "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
      isSaved: false,
      posted: "2 days ago",
      tags: ["React", "TypeScript", "UI"],
      pay: 120,
      location: "Bangalore, India",
    },
    {
      id: 2,
      company: "Amazon",
      role: "SDE I",
      logo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
      isSaved: true,
      posted: "5 days ago",
      tags: ["Java", "AWS", "DSA"],
      pay: 95,
      location: "Hyderabad, India",
    },
    {
      id: 3,
      company: "Meta",
      role: "Full Stack Developer",
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      isSaved: false,
      posted: "1 day ago",
      tags: ["Node.js", "GraphQL", "React"],
      pay: 130,
      location: "Remote",
    },
    {
      id: 4,
      company: "Apple",
      role: "iOS Developer",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDV2W2nC6DWgBSwFAP7LCqwI9UshjFx--Sw&s",
      isSaved: true,
      posted: "3 days ago",
      tags: ["Swift", "iOS", "UIKit"],
      pay: 140,
      location: "Cupertino, USA",
    },
    {
      id: 5,
      company: "Netflix",
      role: "Backend Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      isSaved: false,
      posted: "1 week ago",
      tags: ["Java", "Microservices", "Cloud"],
      pay: 150,
      location: "Remote",
    },
    {
      id: 6,
      company: "Microsoft",
      role: "Software Engineer",
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      isSaved: false,
      posted: "4 days ago",
      tags: ["C#", ".NET", "Azure"],
      pay: 110,
      location: "Hyderabad, India",
    },
    {
      id: 7,
      company: "Adobe",
      role: "UI Engineer",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDNPc_2duWJbCR_BIaJT-d_7gLWD-yGLuPQ&s",
      isSaved: true,
      posted: "2 days ago",
      tags: ["React", "CSS", "Design Systems"],
      pay: 105,
      location: "Noida, India",
    },
    {
      id: 8,
      company: "Uber",
      role: "Data Engineer",
      logo: "https://grapheine.com/wp-content/uploads/2018/10/uber-logo-2560x1576.webp",
      isSaved: false,
      posted: "6 days ago",
      tags: ["Python", "Spark", "Big Data"],
      pay: 125,
      location: "Bangalore, India",
    },
    {
      id: 9,
      company: "Airbnb",
      role: "Frontend Developer",
      logo: "https://s.yimg.com/uu/api/res/1.2/Bz8iDlw16Zf6PVc.y33xdg--~B/aD0zOTA7dz02MTA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1405612741-airbnb-why-new-logo_original.jpg",
      isSaved: true,
      posted: "3 days ago",
      tags: ["Next.js", "React", "Tailwind"],
      pay: 135,
      location: "Remote",
    },
    {
      id: 10,
      company: "LinkedIn",
      role: "Backend Developer",
      logo: "https://assets.turbologo.com/blog/en/2025/03/21134931/logo-2021.png",
      isSaved: false,
      posted: "5 days ago",
      tags: ["Java", "Spring Boot", "Kafka"],
      pay: 115,
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="p-5 flex flex-wrap gap-4">
      {jobsData.map((jobD, idx) => {
        return (
          <div key={idx}>
            <Card jobData={jobD} />
          </div>
        );
      })}
    </div>
  );
};

export default AllCards;
