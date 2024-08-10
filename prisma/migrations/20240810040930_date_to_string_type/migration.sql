-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beneficiary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "spousename" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "numberOfChildren" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "workplace" TEXT NOT NULL,
    "employmentStatus" TEXT NOT NULL,
    "idnumber" TEXT NOT NULL,
    "identityType" TEXT NOT NULL,
    "voucherId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Beneficiary" ("createdAt", "dateOfBirth", "email", "employmentStatus", "firstname", "gender", "id", "identityType", "idnumber", "lastname", "middlename", "numberOfChildren", "profilePicture", "spousename", "updatedAt", "voucherId", "workplace") SELECT "createdAt", "dateOfBirth", "email", "employmentStatus", "firstname", "gender", "id", "identityType", "idnumber", "lastname", "middlename", "numberOfChildren", "profilePicture", "spousename", "updatedAt", "voucherId", "workplace" FROM "Beneficiary";
DROP TABLE "Beneficiary";
ALTER TABLE "new_Beneficiary" RENAME TO "Beneficiary";
CREATE INDEX "Beneficiary_email_idnumber_idx" ON "Beneficiary"("email", "idnumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
