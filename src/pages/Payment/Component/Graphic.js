import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdShowChart } from "react-icons/md"
const { faker } = require("@faker-js/faker");

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data1 = [0, 10, 5, 2, 20, 30, 45];
const data2 = [15, 50, 15, 35, 20, 10, 5];

// const data = {[

// ]}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Graphic() {
  const [dataset, setData] = useState({ label: labels, data1: data1, data2: data2 });
  const [openGraphic, setOpenGraphic] = useState(false)

  const handleGraphic = () => {
    setOpenGraphic(!openGraphic)
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Graphic",
      },
    },
  };

  const data = {
    labels: dataset.label,
    datasets: [
      {
        label: "Dataset 1",
        data: dataset.data1,
        borderColor: "#be237b",
        backgroundColor: "white",
      },
      {
        label: "Dataset 2",
        data: dataset.data2,
        borderColor: "white",
        backgroundColor: "#be237b",
      },
    ],
  };

  return (
    <div id="graphic" className="border rounded p-3 mt-3">
      <div className="d-flex justify-content-between">
        <div><MdShowChart size={20} className="me-3" />Price History</div>
        {!openGraphic ? <button onClick={handleGraphic}><FiChevronDown size={20} /></button> : <button onClick={handleGraphic}><FiChevronUp size={20} /></button>}
      </div>
      {openGraphic && (
        <Line options={options} data={data} />
      )}
    </div>
  );
}