import Project from "./Project.";

function Projects() {
  return (
    <div id="projects" className="flex py-20 mx-0 px-10 bg-[#EDF7FA] sm:mx-20 mt-20 flex-col gap-20">
      <h1 className="sm:ml-20 font-bold text-2xl">Featured Works</h1>
      <Project
        info="This project is a full-stack application designed to provide an extensive product management system. The application includes an admin panel where administrators can oversee and manage all product-related operations effectively. Below are the key features and functionalities of the project:

"
        image="https://img.freepik.com/free-photo/marketing-creative-collage-with-phone_23-2149379900.jpg?t=st=1721747863~exp=1721751463~hmac=3e512636b163da29f0bb9e2d54b5df937abf75c219d6b8ca7baab7fc2a7788c4&w=740"
        name="E-commerce"
        date="2021"
      />
      <Project info="The Admin Dashboard is the central hub for managing all aspects of the product management system. It is designed to provide administrators with a comprehensive and intuitive interface for overseeing and controlling the application's operations." image="https://img.freepik.com/free-vector/dashboard-user-panel-template_23-2148355297.jpg?t=st=1721748818~exp=1721752418~hmac=27f711a72ff7cc64ab5b0e38bfb3c0e0d296fdf9c3d724d183a1618dc53f461d&w=740" name="Admin Dashboard" date="2021" />
      <Project info="The HR Management System is a comprehensive platform designed to streamline and enhance human resource management processes. It provides a centralized interface for HR administrators to manage employee information, recruitment, payroll, performance, and compliance." image="https://img.freepik.com/premium-vector/computer-screen-with-screen-that-says-word-cloud-it_755854-158.jpg?w=740" name="Human Resource System" date="2022" />
    </div>
  );
}

export default Projects;
