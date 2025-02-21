import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data-acess/get-dashboard/type";
import { formatCurrency } from "@/app/_helpers/currency";

interface ExpensePerCategoryProps {
   expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensePerCategory = ({
   expensesPerCategory,
}: ExpensePerCategoryProps) => {
   return (
      <ScrollArea className="col-span-2 h-full rounded-xl border pb-6">
         <CardHeader>
            <CardTitle className="font-bol">Gastos por categoria</CardTitle>
         </CardHeader>

         <div className="mx-6 mb-5 h-[1px] bg-white bg-opacity-10"></div>

         <CardContent className="space-y-6">
            {expensesPerCategory.map((category) => (
               <div key={category.category} className="space-y-2">
                  <div className="flex w-full justify-between">
                     <p className="text-sm font-bold">
                        {TRANSACTION_CATEGORY_LABELS[category.category]}
                     </p>
                     <p>{category.percentageOfTotal}%</p>
                  </div>

                  <Progress value={category.percentageOfTotal} />

                  <p>{formatCurrency(category.totalAmount)}</p>
               </div>
            ))}
         </CardContent>
      </ScrollArea>
   );
};

export default ExpensePerCategory;
