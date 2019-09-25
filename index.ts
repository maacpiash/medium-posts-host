import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.set('Content-Type', 'application/json')
  res.send([
    {
      id: '1be2df4701f1',
      title: 'The Myth of Digital Ecosystem',
      time: 7.558490566037736,
      date: 1539612875583,
      text: 'How well does the idea of an ecosystem of devices and services hold up in 2018?',
      image: 'https://cdn-images-1.medium.com/max/400/1*VrQC868zdZ6jcFjG-VWMNg.jpeg',
      url: 'https://medium.com/maacpiash/the-myth-of-digital-ecosystem-1be2df4701f1'
    },
    {
      id: '31dd2e1dc4eb',
      title: 'শার্প সমাচার (১) : লিংক নিয়ে প্রাথমিক আলোচনা',
      time: 4.185849056603773,
      date: 1536245626106,
      text: 'না, এই লিংক মানে সেই বিখ্যাত (!) link না।',
      image: 'https://cdn-images-1.medium.com/max/400/1*zjFSNUBQRQRv5ErPd2Hh9Q.jpeg',
      url: 'https://medium.com/maacpiash/শার্প-সমাচার-১-লিংক-নিয়ে-প্রাথমিক-আলোচনা-31dd2e1dc4eb'
    }
  ]);
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
