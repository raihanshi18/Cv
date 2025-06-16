import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed z-50 top-0 w-full bg-white/30 backdrop-blur-md"
    >
      <Navbar.Toggle />

      <div className="w-full md:flex md:justify-center">
        <Navbar.Collapse className="items-center">
          <Navbar.Link href="#home" className="text-lg">Home</Navbar.Link>
          <Navbar.Link href="#about" className="text-lg">About Me</Navbar.Link>
          <Navbar.Link href="#skill" className="text-lg">Skills</Navbar.Link>
          <Navbar.Link href="#project" className="text-lg">Project</Navbar.Link>
          <Navbar.Link href="#contact" className="text-lg">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
