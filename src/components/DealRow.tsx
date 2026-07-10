import { Deal } from "@/types/bar";

export function DealRow({ deal }: { deal: Deal }) {
  return (
    <li className="flex items-baseline justify-between text-sm">
      <span>
        <span className="mr-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
          {deal.category}
        </span>
        {deal.description}
      </span>
      {deal.price !== undefined && (
        <span className="font-semibold text-orange-600">
          ${deal.price}
          {deal.originalPrice !== undefined && (
            <span className="ml-1 text-neutral-400 line-through">
              ${deal.originalPrice}
            </span>
          )}
        </span>
      )}
    </li>
  );
}
