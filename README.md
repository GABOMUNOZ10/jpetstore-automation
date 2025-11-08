# JPetStore - Pruebas Automatizadas con Playwright

## 📋 Descripción

Pruebas automatizadas E2E (End-to-End) para la aplicación JPetStore utilizando Playwright.

**Portal**: [JPetStore](https://jpetstore.aspectran.com/)

---

## 📁 Estructura del Proyecto

```
JPetStore-Playwright/
├── tests/
│   ├── compra.spec.ts      # Pruebas del flujo de compra
│   └── perfil.spec.ts      # Pruebas de gestión de perfil
├── playwright.config.ts     # Configuración de Playwright
├── package.json
└── README.md
```

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/GABOMUNOZ10/jpetstore-automation.git
cd jpetstore-automation

# Instalar dependencias
npm install

# Instalar navegadores
npx playwright install
```

---

## 🧪 Pruebas Implementadas

### Módulo A: Flujo de Compra Completa
**Archivo**: `tests/compra.spec.ts`

**Flujo**:
1. Inicio de sesión
2. Navegación al catálogo de productos
3. Selección de categoría (FISH)
4. Selección de producto
5. Agregar al carrito
6. Proceso de checkout
7. Confirmación del pedido

**Validaciones**:
- ✅ Mensaje de confirmación del pedido
- ✅ Número de orden generado
- ✅ Actualización de cantidad en el carrito

### Módulo B: Gestión de Cuenta
**Archivo**: `tests/perfil.spec.ts`

**Flujo**:
1. Inicio de sesión
2. Navegación a "My Account"
3. Actualización de información personal (mínimo 2 campos)
4. Guardar cambios

**Validaciones**:
- ✅ Mensaje de éxito en actualización
- ✅ Persistencia de datos modificados
- ✅ Validación de campos requeridos
- ✅ Actualización de dirección de envío

---

## ▶️ Ejecución de Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo interactivo (UI Mode)
npm run test:ui

# Ejecutar solo el módulo de compra
npm run test:compra

# Ejecutar solo el módulo de perfil
npm run test:perfil

# Ejecutar con navegador visible
npm run test:headed

# Ejecutar en modo debug
npm run test:debug

# Ver reporte HTML
npm run report
```

---

## 📊 Reportes

Playwright genera automáticamente:
- **HTML Report**: Reporte visual interactivo con screenshots
- **Traces**: Grabación completa de la ejecución para debugging
- **Screenshots**: Capturas automáticas en caso de fallos
- **Videos**: Grabación de pruebas fallidas

```bash
# Ver reporte después de ejecutar pruebas
npx playwright show-report

# Ver trace de una prueba específica
npx playwright show-trace trace.zip
```

---

## ⚙️ Configuración

### Credenciales de Prueba
Las pruebas usan las credenciales por defecto de JPetStore:
- **Usuario**: `j2ee`
- **Contraseña**: `j2ee`

### Navegadores
Las pruebas se ejecutan en:
- ✅ Chromium
- ✅ Firefox
- ⚪ WebKit (opcional)

### Timeouts
- **Test timeout**: 30 segundos
- **Action timeout**: 10 segundos
- **Navigation timeout**: 30 segundos

---

## 🛠️ Tecnologías

- **Playwright** v1.40+
- **TypeScript**
- **Node.js** 16+

---

## 📝 Características Implementadas

### Localizadores Robustos
```typescript
// Uso de getByRole (recomendado)
page.getByRole('button', { name: 'Add to Cart' })

// Selectores CSS avanzados
page.locator('input[name="username"]')

// Selectores por texto
page.locator('button:has-text("Continue")')
```

### Auto-wait
Playwright espera automáticamente a que los elementos estén disponibles, eliminando la necesidad de esperas explícitas.

### Aserciones Claras
```typescript
await expect(page.locator('#Content')).toContainText('Thank you');
await expect(page).toHaveURL(/.*viewOrder/);
```

---

## 👤 Autor

**Gabriel Muñoz**
- GitHub: [@GABOMUNOZ10](https://github.com/GABOMUNOZ10)
- Proyecto: Plan de Pruebas Automatizadas N2

---

## 📄 Licencia

Este proyecto es parte de una evaluación académica.

---

## 🔗 Enlaces Útiles

- [Documentación de Playwright](https://playwright.dev/)
- [JPetStore Demo](https://jpetstore.aspectran.com/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

---

**Última actualización**: Noviembre 2025