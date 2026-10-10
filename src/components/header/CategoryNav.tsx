import Link from "next/link";

interface ICategory {
    icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

const CategoryNav = async () => {
  "use cache";

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  const navs: ICategory[] = await res.json();
  
  

  return (
    <nav className="border-b border-gray-300">
      <div className="container mx-auto flex gap-6 overflow-x-auto px-4 py-4">
        {navs.map((nav) => (
          <Link
            key={nav.id}
            href={`/category/${nav.slug}`}
            className="whitespace-nowrap font-medium hover:text-green-600"
          > {nav.icon}
            {nav.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;