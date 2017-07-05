export interface Summary {
  Type: number,
  CateID: number,
  Memo: string
}

export interface Menu {
  Ref: number;
  Title: string;
  Href: string;
  Target: string;
  ImgPath: string;
  Sort: number;
  IsRoot: number;
  IsControl: number;
  Form: string;
  Cate_ID: number;
  MenuRef: Menu[];
}

export interface WebMenu {
  IDNo: Number;
  Ref: Number;
  Title: string;
  Href: string;
  Target: string;
  ImgPath: string;
  Sort: Number;
  IsRoot: Number;
  IsOpen: Number;
  Default_Cate: Number;
  Subject: string;
  Des: string;
  Type: string;
  Theme: string;
  Cake: string;
  Service: string;
  keywords: string;
  Station: Number;
  Update_Date: string;
  Update_User: string;
  TreePath: string;
  Access_groupID: Number;
}
export interface Webpage {
  IDNo: Number;
  CateID: Number;
  Station: Number;
  Title: string;
  Html: string;
  Last_Update: string;
  Flow_Sort: Number;
  Update_Date: string;
  Update_User: string;
  Update_UName: string;
  EDate: string;
  Unit1_ID: Number;
  Unit_ID: Number;
  Unit_Name: string;
  Access_groupID: Number;
}
export interface WebpageGroup {
  IDNo: Number;
  Cate_Name: string;
  Sort: Number;
  Update_Date: string;
  Update_User: string;
  Creat_Date: string;
  Creat_User: string;
  Access_groupID: Number;
}
