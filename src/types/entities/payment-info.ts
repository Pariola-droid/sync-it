export interface IUpdatePaymentInfo {
  bank_domicile: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  home_address: string;
  bank_name: string;
  swift_code: string;
  account_number: string;
  bank_address: string;
  bank_aba: string;
  correspondent_bank_name: string;
  correspondent_bank_account_name: string;
  correspondent_bank_address: string;
}

export interface IUpdatePaymentInfoMutation {
  useSalaryAccount: boolean;
  type: string;
  firstName: string;
  lastName: string;
  middleName: string;
  homeAddress: string;
  bankName: string;
  swiftCode: string;
  accountNumberOrIBAN: string;
  bankAddress: string;
  ABANumber: string;
  correspondentBankName: string;
  correspondentBankAccountName: string;
  correspondentBankAddress: string;
}
