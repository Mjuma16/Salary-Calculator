// this function will be called when customer click on check button
function calculate(){
    var monthlyTax=0;
    var sal_after_tax=0;
    var yearlyTax=0;
    var yearly_income_after_tax=0;
    var salary=parseInt(document.getElementById('salary').value);
        if(salary<0)
        {
            alert("Invalid Salary");
        }
        else if(salary==0)
        {
            alert("Please Enter Your Salary");
        }
        yearsalary=salary*12;

        // when Yearly_salary is less 600000 then there isn't any tax
        if(yearsalary<=600000)
        {
            document.getElementById("monthly_Income").value=salary;
            document.getElementById("monthly_Tax").value=0;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=0;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;

        }

        // when yearly_salary is >600000 and <1200000
        else if(yearsalary>600000 && yearsalary<=1200000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=(yearsalary-600000)*0.05;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >1200000 and <1800000
        else if(yearsalary>1200000 && yearsalary<=1800000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=30000+(yearsalary-1200000)*0.1;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >1800000 and <2500000
        else if(yearsalary>1800000 && yearsalary<=2500000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=90000+(yearsalary-1800000)*0.15;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >2500000 and <3500000
        else if(yearsalary>2500000 && yearsalary<=3500000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=195000 +(yearsalary-2500000)*0.175;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >3500000 and <5000000
        else if(yearsalary>3500000 && yearsalary<=5000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=370000 +(yearsalary-3500000)*0.2;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >5000000 and <8000000
        else if(yearsalary>5000000 && yearsalary<=8000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=670000+(yearsalary-5000000)*0.225;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >8000000 and <12000000
        else if(yearsalary>8000000 && yearsalary<=12000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=1345000+(yearsalary-8000000)*0.25;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >12000000 and <30000000
        else if(yearsalary>12000000 && yearsalary<=30000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=2345000+(yearsalary-12000000)*0.275;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >30000000 and <50000000
        else if(yearsalary>30000000 && yearsalary<=50000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=7295000+(yearsalary-30000000)*0.3;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is >50000000 and <75000000
        else if(yearsalary>50000000 && yearsalary<=75000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=13295000+(yearsalary-50000000)*0.325;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }

        // when yearly_salary is > 75000000
        else if(yearsalary=>75000000)
        {   
            document.getElementById("monthly_Income").value=salary;  
            yearlyTax=21420000+(yearsalary-75000000)*0.35;
            monthlyTax=yearlyTax/12;
            salary=salary-monthlyTax;
            yearly_income_after_tax=yearsalary-yearlyTax;
            document.getElementById("monthly_Tax").value=monthlyTax;
            document.getElementById("Salary_After_Tax").value=salary;
            document.getElementById("yearly_Income").value=yearsalary;
            document.getElementById("yearly_Tax").value=yearlyTax;
            document.getElementById("yearly_Income_After_Tax").value=yearsalary;
        }
};



function reset(){
    document.getElementById("salary").value="";
}
