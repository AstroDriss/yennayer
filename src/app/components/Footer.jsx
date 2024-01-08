import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-800 border-t-2 border-gray-400">
      <div className="section p-3">
        <Image
          src="/images/images__1_-removebg-preview.png"
          width={300}
          height={80}
        />
        <p className="text-center">
          &copy;2024 Ecole Superieur de Technologie Agadir
        </p>
      </div>
    </footer>
  );
};

export default Footer;
