--- a/platforms-leadfy.tsx
+++ b/platforms-leadfy.tsx
@@ -5,7 +5,7 @@ interface Platform {
 
 interface Props {
   /**
-   * @format rich-text
+   * @format text
    */
   title?: string;
   /**
@@ -30,7 +30,7 @@ export default function PlatformsLeadfy({
   return (
     <section className="py-16 px-4 bg-white">
       <div className="container mx-auto text-center">
-        <h2 className="text-4xl font-bold mb-4">{title}</h2>
+        <h2 className="mb-4">{title}</h2>
         <p className="text-xl mb-12">
           {subtitle.split(" ").map((word, index) => (
             <span key={index} className={word === "Leadfy" ? `text-[${highlightColor}]` : ""}>