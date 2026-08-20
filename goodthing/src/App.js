import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const members = [
  {
    id: 1,
    name: "กรวิช",
    nickname: "โอม",
    major: "เทคโนโลยีสารสนเทศ",
    favorites: ["กาแฟ", "เกม", "เขียนโปรแกรม"],
  },
  {
    id: 2,
    name: "ศิวกร",
    nickname: "เจ๋ง",
    major: "เทคโนโลยีสารสนเทศ",
    favorites: ["ฟุตบอล", "หมูกระทะ", "เพลง"],
  },
  {
    id: 3,
    name: "ปราชญา",
    nickname: "โอดิน",
    favorites: ["แมว", "ท่องเที่ยว", "ถ่ายรูป"],
  },
];
function App() {

  return (
    <div className="container">
      <h1>การ์ดสมาชิกกลุ่ม</h1>

      <div className="ProfileCard">
        {members.map((member) => (
          <ProfileCard
            key={member.id}
            name={member.name}
            nickname={member.nickname}
            major={member.major}
            favorites={member.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;