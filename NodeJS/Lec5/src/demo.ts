import bcrypt from "bcrypt";

const demo = async () => {
  const password = "123456";

  const hash1 = await bcrypt.hash(password, 12);
  const hash2 = await bcrypt.hash(password, 12);

  //$2b$12$FpHy.BJ1U4Jk.aXPd7TIGO04L7tdnd7HQtDFdmydP7CNqecN38Y0m
  console.log(hash1);

  //$2b$12$DLKGSIN/hxmINRoQRCzwB.LSGLumPVLFFus3He/stmZZfJCF7nQlq
  console.log(hash2);
};

demo();
