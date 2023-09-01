import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ['Paper', 'Plastic', 'Metals', 'E-waste', 'Other']
//[30, 45, 68, 12, 8]

export default function BasicBars(props) {
  const {quantity} = props;
  console.log(quantity, ' quatnityn in dasbhaprd');
  let labels = [];
  let dataValues = [];

  if (Array.isArray(quantity)) {
    labels = quantity.map(item => item._id);
    dataValues = quantity.map(item => item.totalQty);
  } else {
    console.error('Quantity is not a valid array.');
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Quantity of scraps taken in kg',
        data: dataValues,
        backgroundColor: '#018A44',
      }
    ]
  }
  return <Bar data={data} />;
}
