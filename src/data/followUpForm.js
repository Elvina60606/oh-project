export const followUpForm = [
  {
    system: "physical_exam",
    label: "理學檢查",
    categories: [
      {
        category: "general",
        label: "一般",
        fields: [
          { name: "height", label: "身高", unit: "cm" },
          { name: "weight", label: "體重", unit: "kg" },
          { name: "bmi", label: "BMI" },
          { name: "waistline", label: "腰圍", unit: "cm" },
          { name: "sbp", label: "收縮壓", unit: "mmHg" },
          { name: "dbp", label: "舒張壓", unit: "mmHg" },
        ],
      },
      {
        category: "vision",
        label: "視力",
        fields: [
          { name: "right_va", label: "右眼視力" },
          { name: "left_va", label: "左眼視力" },
          { name: "right_bcva", label: "右眼矯正視力" },
          { name: "left_bcva", label: "左眼矯正視力" },
          { name: "color_vision", label: "色盲" },
        ],
      },
      {
        category: "hearing",
        label: "聽力",
        fields: [{ name: "hearing_test", label: "聽力檢查" }],
      },
    ],
  },
  {
    system: "biochemistry",
    label: "生化檢查",
    categories: [
      {
        category: "blood",
        label: "血液生化檢查",
        fields: [
          { name: "alt", label: "血清丙胺酸轉胺酶(ALT)" },
          { name: "ac_sugar", label: "飯前血糖(AC)" },
          { name: "creatinine", label: "肌酸酐(Creatinine)" },
          { name: "cholesterol", label: "膽固醇(Cholesterol)" },
          { name: "triglycerides", label: "三酸甘油酯(Triglycerides)" },
          { name: "hdl", label: "高密度膽固醇(HDL-Cholesterol)" },
          { name: "ldl", label: "低密度膽固醇(LDL-Cholesterol)" },
        ],
      },
    ],
  },
  {
    system: "blood_test",
    label: "血液檢查",
    categories: [
      {
        category: "blood",
        label: "血液檢查",
        fields: [
          {
            name: "rbc",
            label: "紅血球計數(Red Blood Count)",
          },
          {
            name: "wbc",
            label: "白血球計數(White Blood Count)",
          },
          { name: "hemoglobin", label: "血色素(Hemoglobin)", unit: "g/dL" },
          { name: "platelets", label: "血小板(Platelets)" },
        ],
      },
    ],
  },
  {
    system: "urine_test",
    label: "尿液檢查",
    categories: [
      {
        category: "urine",
        label: "尿液檢查",
        fields: [
          { name: "urine_protein", label: "尿蛋白(Urine Protein)" },
          { name: "urine_ob", label: "尿潛血(Urine Occult Blood)" },
        ],
      },
    ],
  },
  {
    system: "chest_xray",
    label: "X光檢查",
    categories: [
      {
        category: "x_ray",
        label: "X光檢查",
        fields: [{ name: "chestXRay", label: "胸部X光(Chest X-ray)" }],
      },
    ],
  },
  {
    system: "additional",
    label: "其他",
    categories: [
      {
        category: "custom_items",
        label: "其他",
        fields: [{ name: "items", label: "檢查名稱及結果" }],
      },
    ],
  },
];
