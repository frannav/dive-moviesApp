import type { NextPage } from "next";
import { useState } from "react";
import { addActor } from "../../lib/api";
import styles from "../../styles/Movies.module.css";
import { Actor, Gender } from "../../types";
import toast, { Toaster } from "react-hot-toast";

const AddActor: NextPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Female");

  const addNewActor = async (newActor: Actor) => {
    const responseNewActor = await addActor(newActor);
    if (responseNewActor.message) {
      return toast.error(responseNewActor.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setName(e.target[0].value);
    setAge(e.target[1].value);
    setGender(e.target[2].value);

    const newActor: Actor = {
      name: name,
      age: Number(age),
      gender: gender as Gender,
    };

    addNewActor(newActor);
  };

  return (
    <>
      <Toaster />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Add New Actor</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Age:
              <input type="number" name="age" />
            </label>
            <label>
              Gender:
              <select name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddActor;
