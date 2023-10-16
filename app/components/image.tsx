import clsx from "clsx";

interface imagedata {
  width?: number;
  height?: number;
  src: string;
  alt?: any;
  status?: xstatus;
}

type xstatus = "bulet-user" | "landing-grid" | "landing-grid2" | "landing-grid3" | "googleimg";

const Images: React.FC<imagedata> = ({ width, height, src, alt, status,  }) => {
  return (
    <>
      <picture >
        <img
          src={src}
          alt={alt}
          draggable="false"
          height={height}
          width={width}
          className={clsx({
            "inline-block h-[46px] object-cover rounded-full ring-2 ring-white":
              status === "bulet-user",
              "h-auto object-cover rounded-t-xl": status === "landing-grid",
              "h-[312px] w-full object-cover rounded-t-xl": status === "landing-grid2",
              "h-[212px] w-full object-cover rounded-t-xl": status === "landing-grid3",
          })}
        />
      </picture>
    </>
  );
};

export default Images;
