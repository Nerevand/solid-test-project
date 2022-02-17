type CompanyType = {
  name: string,
  catchPhrase: string,
  bs: string
}

type AddressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: { lat: string, lng: string }
}

export type UserProps = {
  address: AddressType,
  company: CompanyType,
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}