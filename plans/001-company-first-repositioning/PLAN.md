# 001 — Company-first repositioning: "Evolve Your Company With Purpose"

**Estado:** Propuesto — pendiente de revisión. No ejecutar hasta aprobación explícita.

## Contexto

La web actual vende código ("Evolve Your **Software** With Purpose", refactoring, codebase
optimization, legacy transformation). Queremos vender **empresa**: procesos, automatización,
mejora continua y decisiones basadas en métricas. El código, la IA y la automatización pasan
a ser el *cómo*, no el *qué*.

Referencia de comunicación: runroom.com (servicios claros orientados a resultado, framework
propio con nombre, prueba social) — sin su despliegue visual ni su escala. Nosotros somos 3.

## Decisiones verificadas (sesión de brainstorming)

| # | Decisión | Resultado |
|---|----------|-----------|
| D1 | Cliente objetivo | Gerencia de PYME sin dept. técnico fuerte **y** empresas con equipo técnico propio (el técnico valida la compra: necesita señales de craft → Lab) |
| D2 | Idiomas | **ES + EN**. ES como lengua principal, EN secundario |
| D3 | Papel de la IA | Pilar transversal dentro de cada servicio **+ sección Lab propia** |
| D4 | IA soberana (entrenar/fine-tune, datos on-prem) | **Servicio explícito**: "IA privada / on-prem". Sin certificaciones; la credibilidad viene del Lab |
| D5 | Estructura | **One-page renovada** (no multipágina estilo Runroom) |
| D6 | Equipo | 3 personas. Dos seniors con >20 años de experiencia combinada + 1 junior. Mensaje: "quien te vende es quien ejecuta, sin intermediarios" |
| D7 | Casos de cliente | **NDA fuerte** — no se pueden nombrar clientes ni sectores. La prueba se apoya en: Lab público + métricas anonimizadas + testimonios existentes |
| D8 | Plataforma agéntica | **getturno.work** — plataforma de búsqueda de empleo completamente agéntica (en desarrollo; URL no responde a fecha del plan) |
| D9 | Modelo comercial | Packs de 5k–15k € (reuniones + revisiones + ejecución). Interesa productizar el **Diagnóstico** como puerta de entrada |
| D10 | Métricas contables | +3% ventas tras cambio web; −80% coste de infraestructura; procesos de venta definidos end-to-end acompañando un ×10 en ventas en 3 años (atribución compartida — contarlo como "acompañamos", nunca "causamos") |
| D11 | Blog | Muerto (todo pasa por LinkedIn) pero **no se elimina**: las rutas `/blog` siguen sirviendo, sale del nav principal |
| D12 | Desarrollo a medida desde cero | **Sigue dentro** de la oferta, aunque el foco preferido es mejorar lo que ya funciona y ya mueve dinero |
| D13 | Plazo | Sin urgencia — "cuando esté" |

## Consequences ledger

### Qué simplifica

- **Coherencia del relato:** Kaizen deja de ser filosofía de código y pasa a ser el método de
  negocio (*medir → diagnosticar → mejorar → volver a medir*). Es nuestro "IDG™" y viene de fábrica.
- **Servicios comprables:** 4 packs concretos que coinciden con cómo ya facturamos (5k–15k),
  en lugar de 6 servicios-ensayo en acordeones.
- **El problema del NDA desaparece:** la credibilidad se demuestra con trabajo propio público
  (Lab) y números anonimizados, no con logos de cliente que no podemos dar.
- **Menos superficie que mantener:** one-page + blog congelado. El contenido vivo va a LinkedIn.

### Qué complica

- **i18n real (ES + EN):** la web pasa de página única EN a routing por idioma (`/es`, `/en`).
  Cada texto vive en diccionarios ×2. Es el mayor cambio técnico del plan.
- **La prueba pesa sobre el Lab:** llm-pareto es público y sólido, pero tokens-dashboard es una
  herramienta interna (necesita screenshots/story) y getturno.work aún no responde (necesita
  estar presentable o contarse como "en construcción").
- **Riesgo de posicionamiento:** al bajar el foco de "code consultancy" podemos enfriar leads de
  refactoring que sí queremos. Mitigación: el pack "Producto Digital" conserva explícitos
  performance, deuda técnica, legacy y desarrollo a medida.
- **Blog congelado pero visible:** puede parecer abandonado si alguien entra. Mitigación: fuera
  del nav, sin cambios, redirigiendo el canal activo a LinkedIn.

## Arquitectura de la one-page (orden de secciones)

1. **Hero** — "Evolve Your Company With Purpose". Subtítulo de negocio: mejora continua de
   procesos, automatización e IA, decisiones con métricas. CTAs: reservar reunión + ver servicios.
2. **El método (Kaizen)** — ciclo visual en 4 pasos: *Medir → Diagnosticar → Mejorar/Automatizar
   → Volver a medir*. Es el framework con nombre que Runroom tiene en IDG™; el nuestro ya es la
   marca.
3. **Servicios — 4 packs.** Cada uno responde *qué recibe el cliente* y *cómo se empieza*:
   - **S1 · Diagnóstico & Métricas** — puerta de entrada de bajo compromiso. Revisión de
     procesos, sistemas y datos; informe con métricas y quick wins.
   - **S2 · Automatización de Procesos** — de tareas manuales repetitivas a flujos que se
     ejecutan solos. Incluye capacidad de plataformas agénticas.
   - **S3 · IA Aplicada & Privada** — adopción con criterio: selección coste/calidad de modelos,
     fine-tuning y entrenamiento, limpieza de datos, **todo on-prem si hace falta: los datos no
     salen del edificio**.
   - **S4 · Producto Digital** — mejora continua de lo que ya funciona y mueve dinero:
     performance, deuda técnica, legacy; y desarrollo a medida cuando toca construir.
4. **El Lab** — "Investigamos en casa antes de aplicarlo en tu empresa."
   - **llm-pareto** (llm-pareto.kaidev.io, público): frontera de Pareto calidad/coste de LLMs;
     prueba la selección de modelos basada en métricas. Hay demo video (`demo-tour-hq.mp4`).
   - **tokens-dashboard** (interno): observabilidad y economía de nuestras propias sesiones con
     agentes IA (coste efectivo $/1M, TTFT, recomendación de modelo por caso de uso). Necesita
     screenshots. Prueba la cultura de medición.
   - **getturno.work** (en construcción): plataforma de búsqueda de empleo completamente
     agéntica. Prueba la capacidad de construir sistemas agentic end-to-end.
   - **Homelab**: infraestructura propia para entrenar y experimentar — base del servicio S3.
5. **Cómo trabajamos + equipo** — orgánico, sin big-bang rewrites; métricas antes y después;
   transferencia de conocimiento. Dos seniors con >20 años combinada; quien vende ejecuta.
   Franja de resultados medidos en proyectos reales (bajo NDA): +3% ventas, −80% infra,
   acompañamiento ×10 en 3 años.
6. **Testimonios** — los 2 reales actuales se conservan.
7. **Contacto** — sin cambios funcionales.

### Fuera / relegado

- **Blog:** rutas vivas, fuera del nav. Canal activo → LinkedIn.
- **Laravel Catalunya:** de sección propia al footer.
- **Philosophy section actual:** absorbida por "El método" (sección 2) — no duplicar Kaizen.

## Tono y copy

- Headers de resultado, no de tecnología ("Procesos que se ejecutan solos", "Decisiones con
  números, no con corazonadas"). Cero "mission-critical enterprise-grade".
- ES primero; EN como traducción. El copy final ES es entregable del Step 2 y se revisa en código.
- Honestidad de atribución en métricas: "resultados medidos en proyectos de cliente (bajo NDA)";
  el ×10 como acompañamiento, no causalidad.

## Cambios técnicos principales

- **i18n:** segmento `app/[lang]/` con `generateStaticParams` (`es`, `en`), redirect de `/` a
  `/es`, diccionarios por sección en `lib/i18n/` (sin dependencia nueva si es viable con el
  App Router nativo). Metadata + `hreflang` por idioma. Selector de idioma en el nav.
- **Secciones nuevas/rewrite:** hero, método (nueva), services (rewrite a 4 packs), lab (nueva),
  about/team (rewrite), how-we-work + metrics strip (nueva). Testimonios y contacto se conservan.
- **Nav:** entradas nuevas anclas (Método, Servicios, Lab, Equipo, Contacto) + selector idioma;
  Blog y Philosophy fuera.
- **Footer:** + Laravel Catalunya, + LinkedIn, + enlaces Lab.

## Steps (ejecución gateada, un commit por paso tras "staged")

1. **S1 · i18n plumbing** — `[lang]` routing, diccionarios, redirect `/` → `/es`, migración del
   contenido actual a ES+EN con paridad (sin copy nuevo). Verificable: la web actual funciona
   igual en ambos idiomas.
2. **S2 · Hero + Método Kaizen** — nuevo posicionamiento y ciclo visual. Copy final ES+EN.
3. **S3 · Servicios** — rewrite a los 4 packs.
4. **S4 · Lab** — sección nueva con llm-pareto (link + video), tokens-dashboard (screenshots),
   getturno (story), homelab.
5. **S5 · Equipo + cómo trabajamos + franja de métricas.**
6. **S6 · Nav/footer** — anclas nuevas, selector idioma, Blog fuera del nav, Laravel Catalunya
   y LinkedIn al footer.
7. **S7 · SEO & pasada final** — metadata ES/EN ("Evolve Your Company With Purpose"), hreflang,
   sitemap, OG, verificación de links y build.

## Pendientes del usuario (inputs que faltan)

- [ ] Confirmar estado/URL de **getturno.work** (no responde) y logo/brand si tiene.
- [ ] 1–2 **screenshots del tokens-dashboard** (o sesión para capturarlos).
- [ ] ¿Publicar **precios "desde X €"** en los packs? Recomendación: sí al menos en S1
      Diagnóstico (ancla y pre-filtra PYMEs). Decisión del usuario.
- [ ] URL de la **LinkedIn company page**.
- [ ] ¿**Fotos de equipo** sí/no? (About humano; si no, isotipo como ahora.)
- [ ] Confirmar **kaidev.io** como dominio con `/es` default.

## Definition of done

- `/es` y `/en` sirven la one-page completa con el nuevo posicionamiento; `/` redirige a `/es`.
- Las 7 secciones en orden definido; 4 packs de servicios; sección Lab con llm-pareto enlazado.
- `/blog` sigue respondiendo (sin entrada en nav); ningún enlace roto.
- Testimonios reales conservados; Laravel Catalunya y LinkedIn en footer.
- Metadata/OG en ambos idiomas; build limpio; sin regresión visual en móvil.
