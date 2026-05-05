import { useEffect, useState } from "react";

const Story = () => {
    const [counts, setCounts] = useState({
        experience: 0,
        products: 0,
        clients: 0,
        Members: 0,
    });

    useEffect(() => {
        let interval = setInterval(() => {
            setCounts((prev) => ({
                experience: prev.experience < 15 ? prev.experience + 1 : 15,
                products: prev.products < 10 ? prev.products + 2 : 10,
                clients: prev.clients < 5 ? prev.clients + 1 : 5,
                Members: prev.Members < 20 ? prev.Members + 1 : 20,
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="stats-container">
      <div className="stat-box">
        <h1>{counts.experience}K+</h1>
        <p>Experience</p>
      </div>

      <div className="stat-box">
        <h1>{counts.products}+</h1>
        <p>Products</p>
      </div>

      <div className="stat-box">
        <h1>{counts.clients}K+</h1>
        <p>Satisfied Clients</p>
      </div>
     <div className="stat-box">
        <h1>{counts.Memebers}K+</h1>
        <p> Local Team Members</p>
      </div>
</div >
  );
};

export default Story;