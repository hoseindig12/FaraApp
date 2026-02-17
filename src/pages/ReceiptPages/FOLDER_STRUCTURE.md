# ReceiptPages - Folder Structure

## 📁 Overview
The ReceiptPages feature uses a **feature-based folder structure** following React best practices for scalability and maintainability.

## 📂 Directory Structure

```
src/pages/ReceiptPages/
├── ReceiptPages.tsx          # Main page component
├── components/               # All feature components (organized by sub-feature)
│   ├── ui/                   # Reusable form field components
│   │   ├── SerialField.tsx
│   │   ├── CheckboxField.tsx
│   │   ├── SelectField.tsx
│   │   ├── ComboBoxField.tsx
│   │   ├── SummaryField.tsx
│   │   ├── ArrowInputField.tsx
│   │   ├── DateInputField.tsx
│   │   ├── LabeledTextField.tsx
│   │   └── index.ts          # Barrel export
│   │
│   ├── grid/                 # DataGrid and related components
│   │   ├── FaraDataGrid.tsx  # Main grid component
│   │   ├── FaraGridHeaderRow.tsx
│   │   ├── faraColumns.tsx   # Column definitions
│   │   ├── faraGridTypes.ts  # Grid type definitions
│   │   ├── FaraGrid/         # Legacy grid module (can be deprecated)
│   │   └── index.ts          # Barrel export
│   │
│   ├── toolbar/              # Toolbar components
│   │   ├── ToolbarForm.tsx
│   │   ├── ToolbarIcons.tsx
│   │   ├── ToolbarIconsSvg.tsx
│   │   ├── ToolbarDefaults.tsx
│   │   └── index.ts          # Barrel export
│   │
│   ├── summary/              # Summary/footer components
│   │   ├── Farasummaryfooter.tsx
│   │   └── index.ts          # Barrel export
│   │
│   ├── bars/                 # Action/Status/Tab bars
│   │   ├── Faraactionbar.tsx
│   │   ├── Farastatusbar.tsx
│   │   ├── FaraTabBar.tsx
│   │   └── index.ts          # Barrel export
│   │
│   └── custom/               # Page-specific custom components
│       ├── CustomField.tsx
│       ├── CustomSpecificfield.tsx
│       ├── KodHesabRow.tsx
│       ├── TahvilGirandeRow.tsx
│       └── index.ts          # Barrel export
│
├── styles/                   # Theme and global styles
│   ├── faraTheme.ts
│   └── index.ts              # Barrel export
│
├── types/                    # TypeScript type definitions
│   └── index.ts              # Barrel export
│
├── hooks/                    # Custom React hooks
│   └── index.ts              # Barrel export
│
└── utils/                    # Utility functions
    └── index.ts              # Barrel export
```

## 🎯 Design Principles

### 1. **Feature-Based Organization**
   - Each folder represents a logical feature or concept
   - Related components are grouped together
   - Makes it easier to locate and maintain code

### 2. **Separation of Concerns**
   - **components/**: React components for UI
   - **styles/**: Theme and styling configuration
   - **types/**: TypeScript interfaces and types
   - **hooks/**: Custom React hooks
   - **utils/**: Helper functions and utilities

### 3. **Scalability**
   - Easy to add new features (just create new folder in components/)
   - Clear naming conventions
   - Barrel exports (`index.ts`) for cleaner imports

### 4. **Import Examples**

#### ❌ Before (scattered imports)
```typescript
import SerialField from "../Componnts/SerialField";
import ToolbarForm from "../Componnts/ToolbarForm";
import Faradatagrid from "../Componnts/Faradatagrid";
import { faraTheme } from "../Componnts/faraTheme";
```

#### ✅ After (clean barrel exports)
```typescript
import { SerialField } from "./components/ui";
import { ToolbarForm } from "./components/toolbar";
import { FaraDataGrid } from "./components/grid";
import { faraTheme } from "./styles";
```

## 📝 Naming Conventions

- **Component files**: PascalCase (e.g., `SerialField.tsx`)
- **Type files**: PascalCase with `.ts` (e.g., `FaraGridTypes.ts`)
- **Util/helper files**: camelCase or specific naming (e.g., `receiptUtils.ts`)
- **Barrel exports**: Always `index.ts`
- **Export default**: Components (so they can be imported by name via barrel)

## 🔄 Migration Checklist

- [x] Create new folder structure
- [x] Copy files to new locations
- [x] Create barrel exports (index.ts)
- [ ] Update all import statements throughout the app
- [ ] Remove old `Componnts/` folder
- [ ] Test all functionality

## 📚 Next Steps

1. Update import statements in `ReceiptPages.tsx` and other files
2. Remove the old `Componnts/` folder once migration is complete
3. Consider extracting types to `types/` folder
4. Add utility functions to `utils/` folder as needed
5. Create custom hooks in `hooks/` folder for state management

## 🚀 Future Improvements

- Extract common types to dedicated type files in `types/`
- Create custom hooks for receipt data management
- Add utility functions for data transformation
- Consider creating a store/context for shared state
- Add .test.tsx files next to components for unit tests
