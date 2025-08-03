const NavItem = ({ label, sectionId, activeSection, onNavClick }) => (
<button onClick={()=> onNavClick(sectionId)}
    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out
      ${activeSection === sectionId
        ? 'bg-white text-blue-700 shadow-md transform scale-105'
        : 'bg-blue-500 text-white hover:bg-blue-400 hover:shadow-md'
      }`}
  >
    {label}
  </button> );
  export default NavItem;