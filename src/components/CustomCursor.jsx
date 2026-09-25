import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;

            const element = document.elementFromPoint(mouseX, mouseY);

            const darkSection = element?.closest(
                '[data-cursor="dark"]'
            );

            if (darkSection) {
                ring.classList.add("cursor-dark");
                dot.classList.add("cursor-dot-dark");
            } else {
                ring.classList.remove("cursor-dark");
                dot.classList.remove("cursor-dot-dark");
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;

            frameRef.current = requestAnimationFrame(animate);
        };

        const handleMouseOver = (event) => {
            const interactive = event.target.closest(
                "a, button, input, textarea, select"
            );

            if (interactive) {
                ring.classList.add("cursor-active");
                dot.classList.add("cursor-dot-active");
            }
        };

        const handleMouseOut = (event) => {
            const interactive = event.target.closest(
                "a, button, input, textarea, select"
            );

            if (interactive) {
                ring.classList.remove("cursor-active");
                dot.classList.remove("cursor-dot-active");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);

            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* DOT */}
            <div
                ref={dotRef}
                className="
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[99999]
                    hidden
                    h-[7px]
                    w-[7px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#174D32]
                    shadow-[0_0_10px_rgba(23,77,50,0.35)]
                    transition-colors
                    duration-300
                    md:block
                "
            />

            {/* RING */}
            <div
                ref={ringRef}
                className="
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[99998]
                    hidden
                    h-[32px]
                    w-[32px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#174D32]/70
                    transition-[width,height,border-radius,background-color,border-color]
                    duration-300
                    md:block
                "
            />
        </>
    );
};

export default CustomCursor;