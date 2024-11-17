import { Navbar, NavbarLink } from "flowbite-react";


const Header = () => {
  return (
    <Navbar fluid rounded className="fixed z-50 top-0 w-full bg-white/30 backdrop-blur-md">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Han</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#home">
          Home
        </Navbar.Link>
        <Navbar.Link as={NavbarLink} href="#about">
          About Me
        </Navbar.Link>
        <Navbar.Link href="#skill">Skills</Navbar.Link>
        <Navbar.Link href="#project">Project</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}   

export default Header

















