---
id: kusion-vs-x
---

# Kusion vs Other Software

It can be difficult to understand how different software compare to each other. Is one a replacement for the other? Are they complementary? etc. In this section, we compare Kusion to other software.

**vs. GitOps (ArgoCD, FluxCD, etc.)**
 
According to the [open GitOps principles](https://opengitops.dev/), GitOps systems typically have its desired state expressed declaratively, continuously observe actual system state and attempt to apply the desired state. In the design of Kusion toolchain, we refer to those principles but have no intention to reinvent any GitOps systems wheel. 

Kusion adopts your GitOps process and improves it with richness of features. The declarative [AppConfiguration](../concepts/appconfigurations) model can be used to express desired intent, once intent is declared [Kusion CLI](../reference/commands) takes the role to make production match intent as safely as possible. 

**vs. PaaS (Heroku, Vercel, etc.)**

Kusion shares the same goal with traditional PaaS platforms to provide application delivery and management capabilities. The intuitive difference from the full functionality PaaS platforms is that Kusion is a client-side toolchain, not a complete PaaS platform. 

Also traditional PaaS platforms typically constrain the type of applications they can run but there is no such constrain for Kusion which means Kusion provides greater flexibility.

Kusion allows you to have platform-like features without the constraints of a traditional PaaS. However, Kusion is not attempting to replace any PaaS platforms, instead Kusion can be used to deploy to a platform such as Heroku.

**vs. KubeVela**

KubeVela is a modern software delivery and management control plane which makes it easier to deploy and operate applications on top of Kubernetes.

Although some might initially perceive an overlap between Kusion and KubeVela, they are in fact complementary and can be integrated to work together. As a lightweight, purely client-side tool, coupled with corresponding [Generator](https://github.com/KusionStack/kusion-module-framework) implementation, Kusion can render [AppConfiguration](../concepts/appconfigurations) schema to generate CRD resources for KubeVela and leverage KubeVela's control plane to implement application delivery.

**vs. Helm**

The concept of Helm originates from the [package management](https://en.wikipedia.org/wiki/Package_manager) mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package. 

Kusion is not a package manager. Kusion naturally provides a superset of Helm capabilities with the modeled key-value pairs, so that developers can use Kusion directly as a programable alternative to avoid the pain of writing text templates. For users who have adopted Helm, the stack compilation results in Kusion can be packaged and used in Helm format.

**vs. Kubernetes**

Kubernetes(K8s) is a container scheduling and management runtime widely used around the world, an "operating system" core for containers, and a platform for building platforms. Above the Kubernetes API layer, Kusion aims to provide app-centric **abstraction** and unified **workspace**, better **user experience** and automation **workflow**, and helps developers build the app delivery model easily and collaboratively.
